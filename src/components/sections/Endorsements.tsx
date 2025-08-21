import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, Star } from 'lucide-react';

interface Endorsement {
  company: string;
  logo: string;
  person: string;
  role: string;
  testimonial: string;
  link: string;
}

interface EndorsementsProps {
  endorsements: Endorsement[];
}

const Endorsements: React.FC<EndorsementsProps> = ({ endorsements }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Get current language from route
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/en')) return 'en';
    if (location.pathname.startsWith('/ru')) return 'ru';
    return 'lv'; // default to Latvian
  };

  // Get localized text
  const getLocalizedText = (key: string) => {
    const language = getCurrentLanguage();
    const translations = {
      title: {
        lv: 'Klientu atsauksmes',
        en: 'Endorsements from our clients',
        ru: 'Отзывы наших клиентов'
      },
      subtitle: {
        lv: 'Mums uzticas vadošie atkritumu apsaimniekošanas uzņēmumi visā Latvijā un Eiropā',
        en: 'Trusted by leading waste management companies across Latvia and Europe',
        ru: 'Нам доверяют ведущие компании по управлению отходами в Латвии и Европе'
      },
      readMore: {
        lv: 'Lasīt vairāk',
        en: 'Read more',
        ru: 'Читать далее'
      }
    };
    return translations[key as keyof typeof translations]?.[language] || translations[key as keyof typeof translations]?.lv;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.endorsement-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-rotate-in');
              }, index * 200);
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

  const generateLogo = (company: string) => {
    const initials = company.split(' ').map(word => word[0]).join('').substring(0, 2);
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600'
    ];
    const colorIndex = company.length % colors.length;
    
    return (
      <div className={`w-16 h-16 bg-gradient-to-br ${colors[colorIndex]} rounded-xl flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-lg">IS</span>
      </div>
    );
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) {
      return text.padEnd(maxLength, ' ') + '.....';
    }
    return text.substring(0, maxLength) + '.....';
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-endorsements relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-32 w-80 h-80 bg-brand-primary rounded-full blur-3xl floating" />
          <div className="absolute bottom-32 left-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl floating-delayed" />
        </div>
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-tint/30 to-white/50" />
      </div>

      <div className="container-3of4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-fg-primary mb-4">
            {getLocalizedText('title')}
          </h2>
          <p className="text-lg md:text-xl text-fg-secondary max-w-3xl mx-auto leading-relaxed">
            {getLocalizedText('subtitle')}
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {endorsements.map((endorsement, index) => (
            <Card 
              key={index}
              className="endorsement-card card-premium bg-white/90 backdrop-blur-sm border-brand-primary/10 hover:border-brand-primary/30 shadow-lg hover:shadow-2xl group relative overflow-hidden opacity-0"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-tint/10 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors duration-300">
                <Quote className="h-12 w-12" fill="currentColor" />
              </div>
              
              <CardContent className="p-8 relative z-10">
                {/* Company Logo */}
                <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                  {generateLogo(endorsement.company)}
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-fg-secondary mb-6 leading-relaxed text-base italic group-hover:text-fg-primary transition-colors duration-300">
                  "{truncateText(endorsement.testimonial)}"
                </blockquote>

                {/* Author */}
                <div className="mb-6">
                  <div className="font-semibold text-fg-primary text-lg">
                    {endorsement.person}
                  </div>
                  <div className="text-sm text-fg-muted">
                    {endorsement.role}
                  </div>
                  <div className="text-sm text-brand-primary font-medium mt-1">
                    {endorsement.company}
                  </div>
                </div>

                {/* Read More Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 group-hover:scale-105"
                  onClick={() => window.open('https://rsga.lv/docs/Getlini.pdf', '_blank')}
                >
                  {getLocalizedText('readMore')}
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-primary-strong transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>
      </div>

      {/* Custom animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-rotate-in {
            animation: rotateIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `
      }} />
    </section>
  );
};

export default Endorsements;