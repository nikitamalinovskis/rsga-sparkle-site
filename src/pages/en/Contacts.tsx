import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Contact RSGA
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Get in touch with our environmental solutions experts
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Address</h3>
                          <a 
                            href={`https://maps.google.com/?q=${encodeURIComponent(contacts.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fg-secondary hover:text-brand-primary transition-colors"
                          >
                            {contacts.address}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Phone</h3>
                          <a 
                            href={`tel:${contacts.phone}`}
                            className="text-fg-secondary hover:text-brand-primary transition-colors"
                          >
                            {contacts.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Email</h3>
                          <a 
                            href={`mailto:${contacts.email}`}
                            className="text-fg-secondary hover:text-brand-primary transition-colors"
                          >
                            {contacts.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <FileText className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-fg-primary mb-1">Fax</h3>
                          <span className="text-fg-secondary">{contacts.fax}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fg-primary">Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-fg-primary mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-fg-primary mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-fg-primary mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-fg-primary mb-2">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-fg-primary mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleConsentChange}
                          className="mt-1"
                        />
                        <label htmlFor="consent" className="text-sm text-fg-secondary leading-relaxed">
                          I agree to the{' '}
                          <a href="/en/privacy-policy" className="text-brand-primary hover:underline">
                            privacy policy
                          </a>{' '}
                          and consent to processing of my personal data for the purpose of responding to my inquiry.
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-brand-primary hover:bg-brand-primary-strong"
                        disabled={!formData.consent}
                      >
                        Send request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Contacts;