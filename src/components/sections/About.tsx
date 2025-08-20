import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  text: string;
}

const About: React.FC<AboutProps> = ({ text }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    'EU compliant solutions',
    'Cost-effective services',
    'Sustainable approach',
    'Expert consultation'
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-semibold text-fg-primary mb-6">
              About RSGA
            </h2>
            <p className="text-lg text-fg-secondary mb-8 leading-relaxed">
              {text}
            </p>
            
            {/* Highlights List */}
            <ul className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-fg-secondary">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>

            <Button variant="secondary" className="hover-lift focus-ring">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Visual Element */}
          <div className="animate-on-scroll">
            <div className="relative">
              {/* Placeholder for image or graphic */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-tint to-bg-muted p-8 border border-border-subtle">
                <div className="w-full h-full rounded-xl bg-brand-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded text-brand-primary font-bold text-lg flex items-center justify-center">
                        R
                      </div>
                    </div>
                    <p className="text-brand-primary font-semibold">Environmental Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;