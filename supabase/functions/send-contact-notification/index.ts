import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  contactId: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  language: string;
  sourcePage?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Contact notification function called');
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { 
      contactId, 
      name, 
      email, 
      phone, 
      company, 
      message, 
      language, 
      sourcePage 
    }: ContactNotificationRequest = await req.json();

    console.log('Processing contact notification for:', { contactId, name, email, language });

    // Get admin notification email from site settings
    const { data: settingsData, error: settingsError } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'contact_settings')
      .single();

    if (settingsError) {
      console.log('No contact settings found, using default email');
    }

    // Default admin email (you can change this or make it configurable)
    const adminEmail = settingsData?.value?.admin_email || 'admin@rsga.lv';
    
    // Prepare localized content
    const subjects = {
      lv: `Jauns kontakta pieprasījums no ${name}`,
      en: `New contact inquiry from ${name}`,
      ru: `Новый контактный запрос от ${name}`
    };

    const greetings = {
      lv: 'Saņemts jauns kontakta pieprasījums',
      en: 'New contact inquiry received',
      ru: 'Получен новый контактный запрос'
    };

    const labels = {
      lv: { name: 'Vārds', email: 'E-pasts', phone: 'Telefons', company: 'Uzņēmums', message: 'Ziņojums', source: 'Avots' },
      en: { name: 'Name', email: 'Email', phone: 'Phone', company: 'Company', message: 'Message', source: 'Source' },
      ru: { name: 'Имя', email: 'Email', phone: 'Телефон', company: 'Компания', message: 'Сообщение', source: 'Источник' }
    };

    const currentLabels = labels[language as keyof typeof labels] || labels.en;
    const subject = subjects[language as keyof typeof subjects] || subjects.en;
    const greeting = greetings[language as keyof typeof greetings] || greetings.en;

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #05376c, #0850a0); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #05376c; }
          .label { font-weight: 600; color: #05376c; margin-bottom: 5px; }
          .value { color: #374151; }
          .message-content { background: #f1f5f9; padding: 15px; border-radius: 6px; font-style: italic; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; font-size: 14px; }
          .admin-link { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #05376c; color: white; text-decoration: none; border-radius: 6px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">${greeting}</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">RSGA Contact Form</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">${currentLabels.name}</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">${currentLabels.email}</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            ${phone ? `
            <div class="field">
              <div class="label">${currentLabels.phone}</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            
            ${company ? `
            <div class="field">
              <div class="label">${currentLabels.company}</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">${currentLabels.message}</div>
              <div class="message-content">${message}</div>
            </div>
            
            ${sourcePage ? `
            <div class="field">
              <div class="label">${currentLabels.source}</div>
              <div class="value">${sourcePage}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Language / Valoda / Язык</div>
              <div class="value">${language.toUpperCase()}</div>
            </div>
            
            <div style="text-align: center;">
              <a href="${Deno.env.get('SUPABASE_URL')?.replace('https://', 'https://supabase.com/dashboard/project/')}/editor" class="admin-link">
                Open Admin Panel
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent automatically from the RSGA website contact form.</p>
            <p><strong>Contact ID:</strong> ${contactId}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send notification email to admin
    const emailResponse = await resend.emails.send({
      from: "RSGA Contact Form <noreply@rsga.lv>",
      to: [adminEmail],
      subject: subject,
      html: htmlContent,
      replyTo: email // Allow admin to reply directly to the contact
    });

    console.log("Admin notification email sent:", emailResponse);

    // Optional: Send confirmation email to the contact person
    const confirmationSubjects = {
      lv: 'Paldies par Jūsu ziņojumu - RSGA',
      en: 'Thank you for your message - RSGA', 
      ru: 'Спасибо за ваше сообщение - RSGA'
    };

    const confirmationMessages = {
      lv: `Sveiki, ${name}!\n\nPaldies par Jūsu ziņojumu. Mēs to esam saņēmuši un sazināsimies ar Jums tuvākajā laikā.\n\nAr cieņu,\nRSGA komanda`,
      en: `Hello ${name}!\n\nThank you for your message. We have received it and will get back to you shortly.\n\nBest regards,\nRSGA Team`,
      ru: `Здравствуйте, ${name}!\n\nСпасибо за ваше сообщение. Мы получили его и свяжемся с вами в ближайшее время.\n\nС уважением,\nКоманда RSGA`
    };

    const confirmationSubject = confirmationSubjects[language as keyof typeof confirmationSubjects] || confirmationSubjects.en;
    const confirmationMessage = confirmationMessages[language as keyof typeof confirmationMessages] || confirmationMessages.en;

    // Send confirmation to contact person
    const confirmationResponse = await resend.emails.send({
      from: "RSGA <noreply@rsga.lv>",
      to: [email],
      subject: confirmationSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #05376c, #0850a0); color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <h2 style="margin: 0;">RSGA</h2>
          </div>
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="white-space: pre-line; line-height: 1.6;">${confirmationMessage}</p>
          </div>
        </div>
      `
    });

    console.log("Confirmation email sent to contact:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailResponse,
      confirmationResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);