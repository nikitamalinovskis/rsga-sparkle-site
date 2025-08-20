import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Target, BarChart, FileCheck, Users } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const focusAreas = [
  { icon: FileCheck, title: "Regulatory Alignment", description: "Ensuring compliance with EU and local environmental regulations" },
  { icon: Target, title: "Technology Roadmapping", description: "Strategic planning for technology adoption and modernization" },
  { icon: BarChart, title: "Business Cases", description: "Financial analysis and business case development for investments" },
  { icon: Users, title: "KPI & Reporting Setup", description: "Performance measurement systems and regulatory reporting" }
];

const services = [
  { title: "Operational Assessment", description: "Comprehensive review of current landfill operations and efficiency analysis" },
  { title: "Compliance Planning", description: "Regulatory compliance strategy and implementation planning" },
  { title: "Cost Optimization", description: "CAPEX/OPEX analysis and cost reduction strategies" },
  { title: "Technology Integration", description: "Evaluation and implementation of new environmental technologies" },
  { title: "Performance Monitoring", description: "KPI development and monitoring systems for operational excellence" },
  { title: "Strategic Planning", description: "Long-term growth and sustainability planning" }
];

const benefits = [
  "Improved operational efficiency and cost control",
  "Enhanced regulatory compliance and risk management",
  "Strategic technology adoption and modernization",
  "Data-driven decision making and performance tracking",
  "Sustainable growth and competitive advantage",
  "Stakeholder confidence and transparency"
];

const Planning = () => {
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
              <span className="text-fg-primary">Planning & Business Development</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Planning & business development
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Practical consulting for sustainable landfill operations, CAPEX/OPEX efficiency, and compliance.
                </p>
                <p className="text-lg text-fg-secondary mb-8">
                  <strong>Focus:</strong> Regulatory alignment, technology roadmapping, business cases, KPI and reporting setup.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/contacts">
                    Book a consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png"
                  alt="Business consulting and planning services for sustainable landfill management and compliance"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Our Focus Areas</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Strategic consulting services designed to enhance your landfill operations and business performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {focusAreas.map((area, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <area.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{area.title}</h3>
                    <p className="text-fg-secondary text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Consulting Services</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Comprehensive business development and operational optimization services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{service.title}</h3>
                        <p className="text-fg-secondary text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Expected Outcomes</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Our planning and business development services deliver measurable improvements in operational performance and strategic positioning:
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Our Approach</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Target className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Assessment Phase</h4>
                          <p className="text-sm text-fg-secondary">Comprehensive evaluation of current operations and market position</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <BarChart className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Strategic Planning</h4>
                          <p className="text-sm text-fg-secondary">Development of actionable strategies and implementation roadmaps</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <FileCheck className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Implementation Support</h4>
                          <p className="text-sm text-fg-secondary">Ongoing support and monitoring during strategy execution</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-tint rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Experience:</strong> Our team combines technical expertise with business acumen to deliver practical solutions.
                      </p>
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
                Optimize Your Landfill Operations
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Schedule a consultation to discuss how our planning and business development services can enhance your operations and strategic position.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/en/contacts">
                  Book a consultation
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

export default Planning;