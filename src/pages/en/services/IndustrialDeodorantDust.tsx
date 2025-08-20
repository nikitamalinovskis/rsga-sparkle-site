import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Wind, Shield, Users, FileCheck } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  { icon: Wind, title: "Improved Air Quality", description: "Effective odor neutralization and dust suppression" },
  { icon: Users, title: "Community Comfort", description: "Reduced impact on neighboring communities" },
  { icon: FileCheck, title: "Regulatory Alignment", description: "Helps meet environmental compliance requirements" },
  { icon: Shield, title: "Safer Operations", description: "Improved working conditions and road safety" }
];

const applications = [
  { location: "Landfills", description: "Odor control and dust suppression at active areas" },
  { location: "Material Stockpiles", description: "Prevention of dust emissions from stored materials" },
  { location: "Haul Roads", description: "Dust control on unpaved roads and access routes" },
  { location: "Construction Sites", description: "Air quality management during earthwork operations" },
  { location: "Recycling Facilities", description: "Odor and dust control at processing areas" },
  { location: "Transfer Stations", description: "Comprehensive air quality management" }
];

const Deodorant = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-bg-subtle border-b border-border-subtle">
          <div className="container-3of4">
            <nav className="flex items-center space-x-2 text-sm text-fg-muted">
              <Link to="/en" className="hover:text-brand-primary transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <span>→</span>
              <Link to="/en/services" className="hover:text-brand-primary transition-colors">
                Services
              </Link>
              <span>→</span>
              <span className="text-fg-primary">Industrial Deodorant & Anti-dust</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Industrial deodorant & anti-dust treatment
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Mitigate odors and suppress dust for safer, more comfortable operations at landfills and industrial facilities.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/contacts">
                    Talk to a specialist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png"
                  alt="Industrial deodorant and anti-dust treatment equipment for landfills and industrial sites"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Key Benefits</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Professional odor control and dust suppression solutions for industrial environments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{benefit.title}</h3>
                    <p className="text-fg-secondary text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Where We Apply Our Solutions</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Our deodorant and anti-dust treatments are effective across various industrial environments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{app.location}</h3>
                        <p className="text-fg-secondary text-sm">{app.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Information */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Technical Approach</h2>
                <p className="text-lg text-fg-secondary mb-6">
                  Our industrial deodorant and anti-dust solutions use advanced formulations designed for challenging industrial environments.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-tint rounded-full p-2 mt-1">
                      <Wind className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-fg-primary mb-1">Odor Neutralization</h4>
                      <p className="text-sm text-fg-secondary">Advanced chemical neutralization of odorous compounds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-tint rounded-full p-2 mt-1">
                      <Shield className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-fg-primary mb-1">Dust Suppression</h4>
                      <p className="text-sm text-fg-secondary">Long-lasting dust control with minimal reapplication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-tint rounded-full p-2 mt-1">
                      <FileCheck className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-fg-primary mb-1">Environmental Safety</h4>
                      <p className="text-sm text-fg-secondary">Biodegradable formulations that meet environmental standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Application Methods</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-fg-primary mb-2">Spray Application</h4>
                        <p className="text-sm text-fg-secondary mb-3">Direct application using specialized spray equipment for immediate odor control and dust suppression.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg-primary mb-2">Fogging Systems</h4>
                        <p className="text-sm text-fg-secondary mb-3">Fine mist application for comprehensive area coverage and atmospheric odor control.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg-primary mb-2">Surface Treatment</h4>
                        <p className="text-sm text-fg-secondary">Long-term surface binding for roads and exposed areas to prevent dust generation.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Improve Air Quality at Your Facility
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Contact our specialists to develop a customized odor control and dust suppression plan for your specific needs.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/en/contacts">
                  Talk to a specialist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Deodorant;