import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const termsSections = [
  {
    title: "Definitions",
    content: "In these terms, 'Company' refers to SIA RSGA (Registration No: 40003811272), 'Services' refers to our environmental solutions including alternative cover, hydroseeding, industrial deodorant and anti-dust treatment, sand supply, earthworks, and consulting services, and 'Client' refers to any individual or entity engaging our services."
  },
  {
    title: "Services",
    content: "RSGA provides environmental solutions for waste management, construction sites, and industrial facilities. Our services include but are not limited to alternative daily and long-term cover, hydroseeding, industrial deodorant and anti-dust treatment, sand supply, earthworks, and planning and business development consulting. Specific service terms will be outlined in individual service agreements."
  },
  {
    title: "Pricing and Payment",
    content: "Service pricing is provided through individual quotes based on project requirements. Payment terms are typically net 30 days from invoice date unless otherwise specified in the service agreement. Late payment may result in service suspension and additional charges as permitted by Latvian law."
  },
  {
    title: "Warranties and Liability",
    content: "We warrant that our services will be performed in accordance with industry standards and applicable regulations. Our liability is limited to the value of services provided unless otherwise required by mandatory provisions of Latvian law. We maintain appropriate professional insurance coverage for our operations."
  },
  {
    title: "Governing Law",
    content: "These terms are governed by the laws of the Republic of Latvia. Any disputes arising from our services or these terms shall be resolved through the courts of Latvia or through arbitration as agreed between the parties. EU regulations on environmental protection and waste management also apply where relevant."
  },
  {
    title: "Contact Information",
    content: `For questions about these terms or our services, contact us at ${contacts.email}, call ${contacts.phone}, or write to ${contacts.address}. We aim to respond to all inquiries within 2 business days.`
  },
  {
    title: "Updates to Terms",
    content: "We reserve the right to update these terms of service as needed to reflect changes in our business operations, legal requirements, or industry standards. Material changes will be communicated to existing clients through our usual communication channels. Continued use of our services constitutes acceptance of updated terms."
  }
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service | RSGA Waste Management"
        description="Review the conditions and rules for using RSGA's website and professional services."
        canonical="https://rsga.lv/en/terms-of-service"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Terms and conditions for using RSGA environmental services
              </p>
              <p className="text-sm text-fg-muted mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <Card>
                  <CardContent className="p-8">
                    <p className="text-lg text-fg-secondary leading-relaxed">
                      These Terms of Service govern your use of services provided by {contacts.company} (Registration No: {contacts.registration_no}) located at {contacts.address}. By engaging our environmental services, you agree to comply with and be bound by these terms.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                {termsSections.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-2xl text-fg-primary">
                        {index + 1}. {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-fg-secondary leading-relaxed">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12">
                <Card className="bg-brand-tint">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">
                      Need Clarification?
                    </h3>
                    <p className="text-fg-secondary mb-6">
                      If you have questions about these terms or need specific service agreements, our team is ready to help.
                    </p>
                    <div className="space-y-2 text-sm text-fg-secondary">
                      <p><strong>Email:</strong> {contacts.email}</p>
                      <p><strong>Address:</strong> {contacts.address}</p>
                      <p><strong>Phone:</strong> {contacts.phone}</p>
                    </div>
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

export default TermsOfService;