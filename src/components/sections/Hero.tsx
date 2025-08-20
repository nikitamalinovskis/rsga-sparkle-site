import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: Array<{
    label: string;
    action: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta }) => {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-tint/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-brand-tint/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold text-fg-primary mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll text-lg md:text-xl text-fg-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center items-center">
            {cta.map((button, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                size="lg"
                className="hover-lift focus-ring min-w-[160px]"
              >
                {button.label}
                {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
                {index === 1 && <Play className="ml-2 h-4 w-4" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;