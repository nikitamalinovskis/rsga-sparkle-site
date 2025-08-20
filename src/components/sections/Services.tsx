import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
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

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-bg-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-fg-primary mb-4">
            Services
          </h2>
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto">
            Comprehensive environmental solutions for sustainable waste management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="service-card hover-lift bg-card border-border-subtle focus-within:ring-2 focus-within:ring-brand-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant={service.category === 'Core' ? 'default' : 'secondary'}
                    className="mb-2"
                  >
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-fg-primary leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-fg-secondary mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <a 
                  href="#" 
                  className="inline-flex items-center text-brand-primary hover:text-brand-primary-strong transition-colors link-underline focus-ring"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;