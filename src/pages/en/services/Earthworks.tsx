import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home, Construction, Shield, Users, Award } from 'lucide-react';

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const services = [
  { title: "Excavation", description: "Site excavation for foundations, utilities, and infrastructure development" },
  { title: "Grading/Leveling", description: "Precise grading and leveling for construction and landscaping projects" },
  { title: "Trenching", description: "Utility trenching and pipeline installation support" },
  { title: "Haul-off", description: "Material removal and disposal services" },
  { title: "Compaction", description: "Soil compaction and stabilization for foundation preparation" },
  { title: "Site Preparation", description: "Complete site preparation for construction projects" }
];

const features = [
  { icon: Users, title: "Certified Operators", description: "Experienced and certified heavy equipment operators" },
  { icon: Construction, title: "Modern Fleet", description: "Well-maintained modern excavation and earthmoving equipment" },
  { icon: Shield, title: "HSE Controls", description: "Comprehensive health, safety, and environmental controls" },
  { icon: Award, title: "Quality Assured", description: "Consistent quality and professional project management" }
];

const projectTypes = [
  "Infrastructure development",
  "Commercial construction",
  "Residential projects",
  "Industrial facilities",
  "Road construction",
  "Utility installations",
  "Landscaping projects",
  "Environmental remediation"
];

const Earthworks = () => {
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
              <span className="text-fg-primary">Earthworks</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                  Earthworks
                </h1>
                <p className="text-xl text-fg-secondary leading-relaxed mb-8">
                  Full-cycle earthmoving services for infrastructure and construction.
                </p>
                <p className="text-lg text-fg-secondary mb-8">
                  <strong>Scope:</strong> Excavation, grading/leveling, trenching, haul-off, compaction.
                </p>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-strong">
                  <Link to="/en/contacts">
                    Plan your project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png"
                  alt="Professional earthworks services with excavators and dump trucks for construction projects"
                  className="w-full rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Our Earthworks Services</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Comprehensive earthmoving solutions for all types of construction and infrastructure projects
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

        {/* Quality & Safety Section */}
        <section className="py-20 bg-bg-subtle">
          <div className="container-3of4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fg-primary mb-4">Quality & Safety</h2>
              <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
                Professional standards in every aspect of our earthworks operations
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

        {/* Project Types Section */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fg-primary mb-6">Project Types</h2>
                <p className="text-lg text-fg-secondary mb-8">
                  We provide earthworks services for a wide range of construction and development projects:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-fg-secondary">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8 bg-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-fg-primary mb-4">Project Management</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Construction className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Pre-project Planning</h4>
                          <p className="text-sm text-fg-secondary">Site assessment and detailed planning for optimal efficiency</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Shield className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Safety Management</h4>
                          <p className="text-sm text-fg-secondary">Comprehensive safety protocols and risk management</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-tint rounded-full p-2 mt-1">
                          <Award className="h-4 w-4 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary mb-1">Quality Control</h4>
                          <p className="text-sm text-fg-secondary">Regular quality checks and adherence to specifications</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-tint rounded-lg">
                      <p className="text-sm text-fg-secondary">
                        <strong>Equipment:</strong> Modern fleet including excavators, dozers, compactors, and haul trucks maintained to highest standards.
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
                Start Your Earthworks Project
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Contact our experienced team to discuss your earthworks requirements and get a detailed project plan.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/en/contacts">
                  Plan your project
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

export default Earthworks;