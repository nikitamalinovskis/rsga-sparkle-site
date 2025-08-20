import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: "alternative-cover",
    title: "Alternative daily & long-term cover",
    description: "Modern replacement for soil cover reducing costs and logistics, EU-compliant.",
    image: "/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png",
    link: "/en/services/alternative-cover"
  },
  {
    id: "hydroseeding",
    title: "Hydroseeding",
    description: "Fast, cost-effective erosion control and vegetation establishment for slopes and sites.",
    image: "/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png",
    link: "/en/services/hydroseeding"
  },
  {
    id: "industrial-deodorant-dust",
    title: "Industrial deodorant & anti-dust",
    description: "Odor mitigation and dust suppression for landfills, roads, and industrial areas.",
    image: "/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png",
    link: "/en/services/industrial-deodorant-dust"
  },
  {
    id: "sale-of-sand",
    title: "Sale of sand",
    description: "Reliable supply for construction and industrial needs.",
    image: "/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png",
    link: "/en/services/sale-of-sand"
  },
  {
    id: "earthworks",
    title: "Earthworks",
    description: "Excavation, leveling, site prep for infrastructure and construction.",
    image: "/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png",
    link: "/en/services/earthworks"
  },
  {
    id: "planning-business-development",
    title: "Planning & business development",
    description: "Consulting for sustainable landfill management, compliance, and growth.",
    image: "/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png",
    link: "/en/services/planning-business-development"
  }
];

const contacts = {
  company: "SIA RSGA",
  registration_no: "40003811272",
  address: "Mārupes iela 4, Rīga, Latvia, LV-1002",
  phone: "+371 67 32 56 73",
  email: "info@rsga.lv",
  fax: "+371 67 32 56 24"
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container-3of4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-fg-primary mb-6">
                Services
              </h1>
              <p className="text-xl text-fg-secondary leading-relaxed">
                Comprehensive environmental solutions for sustainable waste management.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-3of4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <Card key={service.id} className="card-premium group cursor-pointer">
                  <Link to={service.link}>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-fg-primary group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-fg-secondary mb-4">
                        {service.description}
                      </CardDescription>
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-brand-primary hover:text-brand-primary-strong group">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer contacts={contacts} />
    </div>
  );
};

export default Services;