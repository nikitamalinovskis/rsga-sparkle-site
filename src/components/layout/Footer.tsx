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

  const RSGALogoWhite = () => (
    <img 
      src="/lovable-uploads/d2cfb1f1-73a7-43a6-8542-bf1e8bc0883c.png" 
      alt="RSGA Logo" 
      className="h-8 w-auto brightness-0 invert"
    />
  );

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' }
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

      <div className="container mx-auto relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="footer-column opacity-0">
            <div className="mb-6">
              <RSGALogoWhite />
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
                  className="block text-white/80 hover:text-[#d9e6f5] transition-colors duration-300 link-underline focus-ring"
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

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {contacts.company} (Registration No: {contacts.registration_no}). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;