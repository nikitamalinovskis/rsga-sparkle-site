import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Truck, Clock, Award, Settings } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const specifications = [
  { title: "Fraction Options", description: "Various grain sizes available to meet specific construction requirements" },
  { title: "Moisture Range", description: "Controlled moisture content for optimal handling and application" },
  { title: "Quality Standards", description: "All products meet construction industry quality specifications" },
  { title: "Delivery Scheduling", description: "Flexible delivery options to match project timelines" },
  { title: "Volume Options", description: "From small quantities to large-scale project supplies" },
  { title: "Documentation", description: "Complete quality certificates and delivery documentation" }
];

const features = [
  { icon: Award, title: "High Quality", description: "Consistent quality sand meeting industry standards" },
  { icon: Truck, title: "Reliable Supply", description: "Dependable delivery schedules and quantities" },
  { icon: Clock, title: "Flexible Delivery", description: "Scheduling that works with your project timeline" },
  { icon: Settings, title: "Custom Specs", description: "Various fractions and specifications available" }
];

const applications = [
  "Concrete production",
  "Construction and building",
  "Road construction and maintenance",
  "Landscaping projects",
  "Industrial applications",
  "Infrastructure development"
];

const SaleOfSand = () => {
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
              <span className="text-fg-primary">Sale of Sand</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Sale of sand
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Consistent, high-quality sand for construction and industrial uses with flexible delivery.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/contacts">
                    Get pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png"
                  alt="High-quality sand supply for construction and industrial applications"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Why Choose Our Sand Supply</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Reliable quality and delivery for your construction and industrial needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 card-premium">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">{feature.title}</h3>
                    <p className="text-fg-secondary text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Product Specifications</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Comprehensive range of sand products to meet your specific requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specifications.map((spec, index) => (
                <Card key={index} className="p-6 card-premium">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-fg-primary mb-2">{spec.title}</h3>
                        <p className="text-fg-secondary text-sm">{spec.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Applications</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Our sand products are suitable for a wide range of construction and industrial applications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Delivery & Logistics</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Truck className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Fleet Delivery</h4>
                          <p className="text-sm text-fg-secondary">Own delivery fleet ensures reliable and timely deliveries</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Clock className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Flexible Scheduling</h4>
                          <p className="text-sm text-fg-secondary">Delivery schedules adapted to your project timeline</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Settings className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Custom Orders</h4>
                          <p className="text-sm text-fg-secondary">Specific fractions and quantities to meet exact requirements</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-tint rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Note:</strong> All sand products come with quality certificates and meet construction industry standards.
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
                Ready to Order Quality Sand?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us for pricing and delivery options tailored to your project requirements.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/en/contacts">
                  Get pricing
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

export default SaleOfSand;