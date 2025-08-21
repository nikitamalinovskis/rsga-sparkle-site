import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  language: string;
  sourcePage?: string;
  consent: boolean;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submitContactForm = async (formData: ContactFormData) => {
    setLoading(true);

    try {
      // Insert contact into database
      const { data, error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          language: formData.language,
          source_page: formData.sourcePage || window.location.pathname,
          consent: formData.consent,
          status: 'new'
        }])
        .select('id')
        .single();

      if (error) throw error;

      // Send notification email via edge function
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: {
            contactId: data.id,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            language: formData.language,
            sourcePage: formData.sourcePage || window.location.pathname
          }
        });

        if (emailError) {
          console.warn('Email notification failed:', emailError);
          // Don't fail the form submission if email fails
        }
      } catch (emailError) {
        console.warn('Email notification error:', emailError);
        // Continue - contact was saved even if email failed
      }

      // Show success message based on language
      const successMessages = {
        lv: 'Paldies! Jūsu ziņojums ir nosūtīts. Mēs sazināsimies ar Jums tuvākajā laikā.',
        en: 'Thank you! Your message has been sent. We will contact you shortly.',
        ru: 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.'
      };

      toast({
        title: 'Success',
        description: successMessages[formData.language as keyof typeof successMessages] || successMessages.en
      });

      return { success: true, data };

    } catch (error: any) {
      console.error('Contact form submission error:', error);
      
      const errorMessages = {
        lv: 'Kļūda nosūtot ziņojumu. Lūdzu, mēģiniet vēlreiz.',
        en: 'Error sending message. Please try again.',
        ru: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.'
      };

      toast({
        title: 'Error',
        description: errorMessages[formData.language as keyof typeof errorMessages] || errorMessages.en,
        variant: 'destructive'
      });

      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContactForm,
    loading
  };
};