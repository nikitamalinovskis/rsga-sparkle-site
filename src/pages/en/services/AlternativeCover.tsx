import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const benefits = [
  "Up to 30–60% less material handling vs. soil cover",
  "Faster daily operations, improved site logistics",
  "Reduced windblown litter and improved site hygiene",
  "EU standards–aligned practices"
];

const useCases = [
  "Municipal landfills",
  "Transfer stations",
  "Interim cover applications"
];

const processSteps = [
  {
    step: 1,
    title: "Site Assessment",
    description: "Comprehensive evaluation of your landfill site and operational requirements"
  },
  {
    step: 2,
    title: "Application Plan",
    description: "Customized plan for alternative cover implementation and deployment"
  },
  {
    step: 3,
    title: "Ongoing Optimization & Reporting",
    description: "Continuous monitoring and optimization with regular performance reports"
  }
];

const AlternativeCover = () => {
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
              <span className="text-fg-primary">Alternative Cover</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Alternative daily & long-term cover services
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Replace traditional soil cover with a safer, faster, cost-efficient solution. Reduce transport and storage costs, lower operational risk, and ensure EU compliance.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/contacts">
                    Get a quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png"
                  alt="Alternative cover services - Industrial deodorant and dust suppression equipment"
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
                Our alternative cover solutions deliver measurable improvements in efficiency and cost savings
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                      <p className="text-fg-secondary">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Use Cases</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  Our alternative cover solutions are ideal for various waste management facilities:
                </p>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Why Choose Alternative Cover?</h3>
                    <p className="text-fg-secondary mb-6">
                      Traditional soil cover requires significant transportation costs, storage space, and handling time. Our alternative solutions provide superior performance while reducing operational complexity.
                    </p>
                    <div className="bg-brand-tint p-4 rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Compliance Note:</strong> All our alternative cover solutions meet EU environmental standards and local regulatory requirements.
                      </p>
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
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Our Process</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                We follow a systematic approach to ensure optimal results for your facility
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
                Ready to Optimize Your Landfill Operations?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Contact our experts to learn how alternative cover solutions can reduce your costs and improve efficiency.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/en/contacts">
                  Get a quote today
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

export default AlternativeCover;