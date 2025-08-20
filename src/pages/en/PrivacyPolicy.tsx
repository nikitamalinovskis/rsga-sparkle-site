import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const privacySections = [
  {
    title: "Data We Collect",
    content: "We collect information you provide directly to us, such as when you contact us through our website forms, email, or phone. This may include your name, email address, phone number, company information, and any messages you send to us."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to respond to your inquiries, provide our services, improve our website and services, and communicate with you about our environmental solutions and updates that may be relevant to your interests."
  },
  {
    title: "Legal Basis for Processing",
    content: "We process your personal data based on your consent when you contact us, our legitimate interests in providing environmental services and responding to inquiries, and compliance with legal obligations under EU and Latvian data protection laws."
  },
  {
    title: "Data Retention",
    content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with our legal obligations, resolve disputes, and enforce our agreements. Contact information is typically retained for business relationship purposes."
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our website and conducting our business."
  },
  {
    title: "Your Rights",
    content: "Under GDPR and Latvian data protection laws, you have the right to access, rectify, erase, restrict processing, object to processing, and data portability regarding your personal information. You may also withdraw consent at any time."
  },
  {
    title: "Cookies and Tracking",
    content: "Our website uses cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences."
  },
  {
    title: "Contact for Privacy Requests",
    content: `For any privacy-related questions or to exercise your rights, please contact us at ${contacts.email} or write to us at ${contacts.address}. We will respond to your request within 30 days as required by applicable law.`
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                How we collect, use, and protect your personal information
              </p>
              <p className="text-sm text-fg-muted mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <Card>
                  <CardContent className="p-8">
                    <p className="text-lg text-fg-secondary leading-relaxed">
                      At {contacts.company} (Registration No: {contacts.registration_no}), we are committed to protecting your privacy and personal data in accordance with the General Data Protection Regulation (GDPR) and Latvian data protection laws. This privacy policy explains how we collect, use, and safeguard your information when you use our website or services.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                {privacySections.map((section, index) => (
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
                      Questions About This Policy?
                    </h3>
                    <p className="text-fg-secondary mb-6">
                      If you have any questions about this privacy policy or our data practices, please don't hesitate to contact us.
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

export default PrivacyPolicy;