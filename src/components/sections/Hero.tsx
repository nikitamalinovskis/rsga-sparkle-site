import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
    <div 
      className={`absolute opacity-30 ${delay ? 'floating-delayed' : 'floating'} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" className="text-brand-primary">
        <circle cx="50" cy="50" r="30" fill="currentColor" fillOpacity="0.1" />
        <circle cx="50" cy="50" r="20" fill="currentColor" fillOpacity="0.2" />
      </svg>
    </div>
  );

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        
        {/* Floating shapes */}
        <FloatingShape className="top-20 right-32 w-24 h-24" />
        <FloatingShape className="bottom-32 left-24 w-32 h-32" delay={3} />
        <FloatingShape className="top-40 left-1/3 w-20 h-20" delay={1.5} />
        
        {/* Abstract environmental pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-primary/2 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-fg-primary mb-6 leading-tight">
            <span className="bg-gradient-to-r from-fg-primary via-brand-primary to-fg-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll text-lg md:text-xl lg:text-2xl text-fg-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center items-center">
            {cta.map((button, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="lg"
                className={`min-w-[180px] h-12 transition-all duration-300 ${
                  index === 0 
                    ? "bg-brand-primary hover:bg-[#03294d] text-white shadow-lg hover:shadow-xl" 
                    : "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10"
                } focus-ring animate-scale-in`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                {button.label}
                {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            ))}
          </div>

        </div>
        
        {/* Scroll indicator - positioned at very bottom of hero */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div 
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              const nextSection = document.querySelector('#services') || document.querySelector('section:nth-of-type(2)');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="w-6 h-6 text-brand-primary group-hover:animate-pulse transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;