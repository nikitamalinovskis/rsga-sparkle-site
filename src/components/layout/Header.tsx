import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);
      setIsScrolled(scrollPx > 50);
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);
  const navLinks = [{
    href: '#services',
    label: 'Services'
  }, {
    href: '#projects',
    label: 'Projects'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#contacts',
    label: 'Contacts'
  }];
  const RSGALogo = () => <a href="/" className="inline-block">
      <img src="/lovable-uploads/d2cfb1f1-73a7-43a6-8542-bf1e8bc0883c.png" alt="RSGA Logo" className="h-8 w-auto" />
    </a>;
  return <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-brand-primary z-50 transition-all duration-100 ease-out" style={{
      width: `${scrollProgress}%`
    }} />
      
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container-3of4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <RSGALogo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-fg-secondary hover:text-brand-primary transition-all duration-300 link-underline focus-ring font-medium">
                  {link.label}
                </a>)}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="default" className="focus-ring bg-brand-primary hover:bg-[#03294d] text-white shadow-lg hover:shadow-xl transition-all duration-300">Contact us</Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-bg-muted focus-ring transition-colors duration-200" aria-expanded={isMenuOpen} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 border-t border-border-subtle">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => <a key={link.href} href={link.href} className="text-fg-secondary hover:text-brand-primary transition-all duration-300 focus-ring px-2 py-1 animate-fade-in" style={{
                animationDelay: `${index * 100}ms`
              }} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>)}
                <div className="pt-4 animate-fade-in" style={{
                animationDelay: '400ms'
              }}>
                  <Button variant="default" className="w-full focus-ring bg-brand-primary hover:bg-brand-primary-strong text-white">
                    Get a quote
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>;
};
export default Header;