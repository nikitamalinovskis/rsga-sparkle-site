import React from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

interface Contacts {
  company: string;
  registration_no: string;
  address: string;
  phone: string;
  email: string;
  fax: string;
}

interface FooterProps {
  contacts: Contacts;
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {
  const quickLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#privacy', label: 'Privacy' },
  ];

  return (
    <footer id="contacts" className="bg-fg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <span className="ml-2 text-xl font-semibold">RSGA</span>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Company Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>{contacts.company}</p>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Reg. No: {contacts.registration_no}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors link-underline focus-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${contacts.phone}`}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus-ring"
              >
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                {contacts.phone}
              </a>
              
              <a 
                href={`mailto:${contacts.email}`}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus-ring"
              >
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                {contacts.email}
              </a>
              
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(contacts.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-300 hover:text-white transition-colors focus-ring"
              >
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{contacts.address}</span>
              </a>
              
              <div className="flex items-center text-gray-300 text-sm">
                <FileText className="h-4 w-4 mr-3 flex-shrink-0" />
                Fax: {contacts.fax}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RSGA. All rights reserved. Innovative environmental solutions for waste management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;