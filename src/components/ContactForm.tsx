import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useContactForm } from '@/hooks/useContactForm';

interface ContactFormProps {
  language?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  language = 'en', 
  className = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false
  });
  
  const { submitContactForm, loading } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      return;
    }

    const result = await submitContactForm({
      ...formData,
      language,
      sourcePage: window.location.pathname
    });

    if (result.success) {
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false
      });
    }
  };

  const labels = {
    lv: {
      title: 'Sazināties ar mums',
      description: 'Aizsūtiet mums ziņojumu un mēs atbildēsim tuvākajā laikā',
      name: 'Vārds *',
      email: 'E-pasta adrese *',
      phone: 'Telefona numurs',
      company: 'Uzņēmums',
      message: 'Ziņojums *',
      consent: 'Es piekrītu personas datu apstrādei',
      submit: 'Nosūtīt ziņojumu'
    },
    en: {
      title: 'Contact Us',
      description: 'Send us a message and we will get back to you shortly',
      name: 'Name *',
      email: 'Email Address *',
      phone: 'Phone Number',
      company: 'Company',
      message: 'Message *',
      consent: 'I agree to the processing of personal data',
      submit: 'Send Message'
    },
    ru: {
      title: 'Свяжитесь с нами',
      description: 'Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время',
      name: 'Имя *',
      email: 'Электронная почта *',
      phone: 'Номер телефона',
      company: 'Компания',
      message: 'Сообщение *',
      consent: 'Я согласен на обработку персональных данных',
      submit: 'Отправить сообщение'
    }
  };

  const currentLabels = labels[language as keyof typeof labels] || labels.en;

  return (
    <Card className={`max-w-2xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle className="text-brand-primary">
          {currentLabels.title}
        </CardTitle>
        <CardDescription>
          {currentLabels.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{currentLabels.name}</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">{currentLabels.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{currentLabels.phone}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="company">{currentLabels.company}</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">{currentLabels.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
              required
            />
            <Label htmlFor="consent" className="text-sm text-fg-secondary">
              {currentLabels.consent}
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-brand-primary hover:bg-brand-primary-strong"
            disabled={loading || !formData.consent}
          >
            {loading ? 'Sending...' : currentLabels.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;