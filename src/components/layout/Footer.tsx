import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

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

const Footer: React.FC<FooterProps> = ({ contacts }) => {
  const footerRef = useRef<HTMLElement>(null);

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

  const quickLinks = [
    { label: 'Services', href: '/en/services' },
    { label: 'About', href: '/en/about' },
    { label: 'Contacts', href: '/en/contacts' },
    { label: 'Blog', href: '/en/blog' },
    { label: 'Privacy Policy', href: '/en/privacy-policy' },
    { label: 'Terms of Service', href: '/en/terms-of-service' }
  ];

  const serviceLinks = [
    { label: 'Alternative Cover', href: '/en/services/alternative-cover' },
    { label: 'Hydroseeding', href: '/en/services/hydroseeding' },
    { label: 'Industrial Deodorant', href: '/en/services/industrial-deodorant-dust' },
    { label: 'Sale of Sand', href: '/en/services/sale-of-sand' },
    { label: 'Earthworks', href: '/en/services/earthworks' },
    { label: 'Planning & Development', href: '/en/services/planning-business-development' }
  ];

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
                <h3 className="text-white font-semibold text-lg mb-2">{contacts.company}</h3>
                <p className="text-white/80 text-sm">Registration No: {contacts.registration_no}</p>
              </div>
              <p className="text-white/90 leading-relaxed">
                Leading provider of innovative environmental solutions for sustainable waste management across Latvia and Europe.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column opacity-0">
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
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
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <nav className="space-y-3">
              {serviceLinks.map((link, index) => (
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
            <h4 className="text-white font-semibold text-lg mb-6">Contact Information</h4>
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
            © {new Date().getFullYear()} {contacts.company} (Registration No: {contacts.registration_no}). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;