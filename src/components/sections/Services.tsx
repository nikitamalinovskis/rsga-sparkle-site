import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Droplets, Wind, Truck, Pickaxe, TrendingUp } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  link?: string;
  image?: string;
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-stagger');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getServiceIcon = (id: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'alternative-cover': <Shield className="h-6 w-6 text-brand-primary" />,
      'cover': <Shield className="h-6 w-6 text-brand-primary" />,
      'hydroseeding': <Droplets className="h-6 w-6 text-brand-primary" />,
      'industrial-deodorant-dust': <Wind className="h-6 w-6 text-brand-primary" />,
      'deodorant-dust': <Wind className="h-6 w-6 text-brand-primary" />,
      'sale-of-sand': <Truck className="h-6 w-6 text-brand-primary" />,
      'sand': <Truck className="h-6 w-6 text-brand-primary" />,
      'earthworks': <Pickaxe className="h-6 w-6 text-brand-primary" />,
      'planning-business-development': <TrendingUp className="h-6 w-6 text-brand-primary" />,
      'planning': <TrendingUp className="h-6 w-6 text-brand-primary" />
    };
    return iconMap[id] || <Shield className="h-6 w-6 text-brand-primary" />;
  };

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="py-20 bg-gradient-services relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-primary rounded-full blur-3xl" />
        </div>
      </div>
      
      <div className="container-3of4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-fg-primary mb-4">
            Услуги
          </h2>
          <p className="text-lg md:text-xl text-fg-secondary max-w-3xl mx-auto leading-relaxed">
            Комплексные экологические решения для устойчивого управления отходами
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="service-card card-premium bg-white/80 backdrop-blur-sm border-brand-primary/10 hover:border-brand-primary/30 shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              {/* Service Image */}
              {service.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              )}

              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-tint/20 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-brand-tint rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.id)}
                  </div>
                  <Badge 
                    variant={service.category === 'Core' ? 'default' : 'secondary'}
                    className={`${
                      service.category === 'Core' 
                        ? 'bg-brand-primary text-white' 
                        : 'bg-bg-muted text-fg-secondary'
                    } shadow-sm`}
                  >
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-fg-primary leading-tight group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-fg-secondary mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <a 
                  href={service.link || "#"} 
                  className="inline-flex items-center text-brand-primary hover:text-brand-primary-strong transition-all duration-300 link-underline focus-ring font-medium group-hover:translate-x-2"
                >
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </CardContent>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-primary-strong transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;