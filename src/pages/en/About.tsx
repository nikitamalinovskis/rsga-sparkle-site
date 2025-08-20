import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const stats = [
  { icon: Users, label: "Years of Experience", value: "10+", description: "on major sites" },
  { icon: Award, label: "Client Satisfaction", value: "95%+", description: "satisfaction rate" },
  { icon: Globe, label: "Coverage", value: "Latvia & Europe", description: "operational area" },
  { icon: CheckCircle, label: "Projects", value: "1000+", description: "tons handled" }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                About RSGA
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Improve environmental sustainability with innovative, field-proven solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Our Mission</h2>
                <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                  Improve environmental sustainability with innovative, field-proven solutions.
                </p>
                <p className="text-lg text-fg-secondary mb-6 leading-relaxed">
                  <strong>What we do:</strong> Waste-sector services for landfills and construction sites across Latvia & Europe.
                </p>
                <p className="text-lg text-fg-secondary mb-8 leading-relaxed">
                  <strong>Why RSGA:</strong> Operational experience, measurable savings, compliance-first mindset.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/services">See our services</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="RSGA environmental solutions"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Our Impact</h2>
              <p className="text-lg text-fg-secondary">
                Trusted by leading organizations across Latvia and Europe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-fg-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-fg-secondary mb-1">{stat.label}</div>
                    <div className="text-xs text-fg-muted">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Why Choose RSGA</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Our commitment to innovation, sustainability, and excellence sets us apart in the environmental solutions industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-tint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-fg-primary mb-3">Proven Experience</h3>
                <p className="text-fg-secondary">
                  Over 10 years of operational experience on major landfill and construction sites.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-tint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-fg-primary mb-3">Measurable Results</h3>
                <p className="text-fg-secondary">
                  Delivering cost savings and environmental improvements with quantifiable outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-tint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-fg-primary mb-3">EU Compliance</h3>
                <p className="text-fg-secondary">
                  All solutions designed with compliance-first mindset and EU standards alignment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default About;