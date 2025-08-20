import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Leaf, Clock, DollarSign, Shield } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  { icon: Clock, title: "Fast Germination", description: "Quick establishment of vegetation cover" },
  { icon: DollarSign, title: "Cost-Effective", description: "More economical than traditional turf installation" },
  { icon: Shield, title: "Stabilizes Slopes", description: "Effective erosion control and soil stabilization" },
  { icon: Leaf, title: "Improves Aesthetics", description: "Transforms disturbed areas into green landscapes" }
];

const applications = [
  "Landfill slopes and caps",
  "Quarry rehabilitation sites",
  "Road embankments and cuts",
  "Construction site stabilization",
  "Pipeline corridors",
  "Disturbed natural areas"
];

const processSteps = [
  {
    step: 1,
    title: "Seed & Mulch Mix Design",
    description: "Custom blend formulation based on soil conditions, climate, and intended use"
  },
  {
    step: 2,
    title: "Application",
    description: "Professional application using specialized hydroseeding equipment"
  },
  {
    step: 3,
    title: "Monitoring & Touch-ups",
    description: "Regular monitoring and additional applications as needed for optimal results"
  }
];

const Hydroseeding = () => {
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
              <span className="text-fg-primary">Hydroseeding</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Hydroseeding
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  A proven method for erosion control and rapid vegetation establishment on disturbed areas.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/contacts">
                    Request a site visit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png"
                  alt="Hydroseeding services - Professional application of seed and mulch mixture on slopes"
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
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Why Choose Hydroseeding?</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Hydroseeding offers superior results compared to traditional seeding methods
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Applications</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Hydroseeding is effective across a wide range of environments and project types:
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
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Technical Advantages</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Leaf className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Uniform Coverage</h4>
                          <p className="text-sm text-fg-secondary">Ensures even distribution of seeds and mulch across terrain</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Shield className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Weather Resistance</h4>
                          <p className="text-sm text-fg-secondary">Mulch matrix protects seeds from wind and rain erosion</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Clock className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Rapid Application</h4>
                          <p className="text-sm text-fg-secondary">Large areas can be covered quickly and efficiently</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Our Hydroseeding Process</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful vegetation establishment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center p-8 card-premium">
                  <CardContent className="pt-6">
                    <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">{step.title}</h3>
                    <p className="text-fg-secondary">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta text-white">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Slopes with Professional Hydroseeding
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Let our experts assess your site and provide a customized hydroseeding solution for optimal erosion control and vegetation establishment.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/en/contacts">
                  Request a site visit
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

export default Hydroseeding;