import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ContactInfo {
  company: string;
  registration_no: string;
  address: string;
  phone: string;
  email: string;
  fax: string;
}

interface FooterProps {
  contacts: ContactInfo;
}

interface Translations {
  companyName: string;
  registrationLine: string;
  description: string;
  quickLinksTitle: string;
  servicesTitle: string;
  contactTitle: string;
  quickLinks: Array<{ label: string; href: string; }>;
  services: Array<{ label: string; href: string; }>;
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  
  // Detect language from current route
  const getLanguage = (): 'lv' | 'en' | 'ru' => {
    const path = location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/ru')) return 'ru';
    return 'lv'; // default
  };

  const language = getLanguage();

  // Translation objects
  const translations: Record<'lv' | 'en' | 'ru', Translations> = {
    lv: {
      companyName: 'SIA RSGA',
      registrationLine: 'Reģistrācijas Nr.: 40003811272',
      description: 'Vadošais inovatīvu vides risinājumu sniedzējs ilgtspējīgai atkritumu apsaimniekošanai visā Latvijā un Eiropā.',
      quickLinksTitle: 'Ātrās saites',
      servicesTitle: 'Pakalpojumi',
      contactTitle: 'Kontaktinformācija',
      quickLinks: [
        { label: 'Pakalpojumi', href: '/services' },
        { label: 'Par mums', href: '/about' },
        { label: 'Kontakti', href: '/contacts' },
        { label: 'Blogs', href: '/blog' },
        { label: 'Privātuma politika', href: '/privacy-policy' },
        { label: 'Lietošanas noteikumi', href: '/terms-of-service' }
      ],
      services: [
        { label: 'Dienas un ilgtermiņa pārklājumi', href: '/services/alternative-cover' },
        { label: 'Hidrosēšana', href: '/services/hydroseeding' },
        { label: 'Industriālie dezodoranti un putekļu samazināšana', href: '/services/industrial-deodorant-dust' },
        { label: 'Smilšu tirdzniecība', href: '/services/sale-of-sand' },
        { label: 'Zemes darbi', href: '/services/earthworks' },
        { label: 'Plānošana un attīstība', href: '/services/planning-business-development' }
      ]
    },
    en: {
      companyName: 'SIA RSGA',
      registrationLine: 'Registration No: 40003811272',
      description: 'Leading provider of innovative environmental solutions for sustainable waste management across Latvia and Europe.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Services',
      contactTitle: 'Contact Information',
      quickLinks: [
        { label: 'Services', href: '/en/services' },
        { label: 'About', href: '/en/about' },
        { label: 'Contacts', href: '/en/contacts' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Privacy Policy', href: '/en/privacy-policy' },
        { label: 'Terms of Service', href: '/en/terms-of-service' }
      ],
      services: [
        { label: 'Alternative Cover', href: '/en/services/alternative-cover' },
        { label: 'Hydroseeding', href: '/en/services/hydroseeding' },
        { label: 'Industrial Deodorant', href: '/en/services/industrial-deodorant-dust' },
        { label: 'Sale of Sand', href: '/en/services/sale-of-sand' },
        { label: 'Earthworks', href: '/en/services/earthworks' },
        { label: 'Planning & Development', href: '/en/services/planning-business-development' }
      ]
    },
    ru: {
      companyName: 'ООО RSGA',
      registrationLine: 'Регистрационный №: 40003811272',
      description: 'Ведущий поставщик инновационных экологических решений для устойчивого управления отходами в Латвии и Европе.',
      quickLinksTitle: 'Быстрые ссылки',
      servicesTitle: 'Услуги',
      contactTitle: 'Контактная информация',
      quickLinks: [
        { label: 'Услуги', href: '/ru/services' },
        { label: 'О компании', href: '/ru/about' },
        { label: 'Контакты', href: '/ru/contacts' },
        { label: 'Блог', href: '/ru/blog' },
        { label: 'Политика конфиденциальности', href: '/ru/privacy-policy' },
        { label: 'Условия использования', href: '/ru/terms-of-service' }
      ],
      services: [
        { label: 'Ежедневные и долгосрочные покрытия', href: '/ru/services/alternative-cover' },
        { label: 'Гидропосев', href: '/ru/services/hydroseeding' },
        { label: 'Промышленные дезодоранты и пылеподавление', href: '/ru/services/industrial-deodorant-dust' },
        { label: 'Продажа песка', href: '/ru/services/sale-of-sand' },
        { label: 'Земляные работы', href: '/ru/services/earthworks' },
        { label: 'Планирование и развитие', href: '/ru/services/planning-business-development' }
      ]
    }
  };

  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const columns = entry.target.querySelectorAll('.footer-column');
            columns.forEach((column, index) => {
              setTimeout(() => {
                column.classList.add('animate-fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const RSGALogoFooter = () => (
    <a href="/" className="inline-block">
      <img 
        src="/lovable-uploads/249cb742-4a2b-469e-b6b0-e0da82093c55.png" 
        alt="RSGA Logo" 
        className="h-8 w-auto"
      />
    </a>
  );

  return (
    <footer 
      ref={footerRef}
      id="contacts"
      className="bg-brand-primary relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="footer-column opacity-0">
            <div className="mb-6">
              <RSGALogoFooter />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{t.companyName}</h3>
                <p className="text-white/80 text-sm">{t.registrationLine}</p>
              </div>
              <p className="text-white/90 leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column opacity-0">
            <h4 className="text-white font-semibold text-lg mb-6">{t.quickLinksTitle}</h4>
            <nav className="space-y-3">
              {t.quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/80 hover:text-[#d9e6f5] transition-colors duration-300 relative w-fit after:content-[''] after:absolute after:w-0 after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-white/80 after:origin-bottom-right after:transition-all after:duration-300 hover:after:w-full hover:after:scale-x-100 hover:after:origin-bottom-left focus-ring"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div className="footer-column opacity-0">
            <h4 className="text-white font-semibold text-lg mb-6">{t.servicesTitle}</h4>
            <nav className="space-y-3">
              {t.services.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/80 hover:text-[#d9e6f5] transition-colors duration-300 relative w-fit after:content-[''] after:absolute after:w-0 after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-white/80 after:origin-bottom-right after:transition-all after:duration-300 hover:after:w-full hover:after:scale-x-100 hover:after:origin-bottom-left focus-ring"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="footer-column opacity-0">
            <h4 className="text-white font-semibold text-lg mb-6">{t.contactTitle}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contacts.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#d9e6f5] transition-colors duration-300 text-sm leading-relaxed"
                >
                  {contacts.address}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60 flex-shrink-0" />
                <a 
                  href={`tel:${contacts.phone}`}
                  className="text-white/80 hover:text-[#d9e6f5] transition-colors duration-300 text-sm"
                >
                  {contacts.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60 flex-shrink-0" />
                <a 
                  href={`mailto:${contacts.email}`}
                  className="text-white/80 hover:text-[#d9e6f5] transition-colors duration-300 text-sm"
                >
                  {contacts.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-white/60 flex-shrink-0" />
                <span className="text-white/80 text-sm">Fax: {contacts.fax}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width Divider */}
      <div className="w-full h-px bg-white/30 mt-12"></div>
      
      {/* Copyright - constrained width */}
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {t.companyName} ({t.registrationLine}). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;