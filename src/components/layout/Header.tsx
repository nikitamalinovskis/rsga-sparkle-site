import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
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
    href: '/en/services',
    label: 'Services',
    hasDropdown: true
  }, {
    href: '/en/projects',
    label: 'Projects'
  }, {
    href: '/en/about',
    label: 'About'
  }, {
    href: '/en/contacts',
    label: 'Contacts'
  }, {
    href: '/en/blog',
    label: 'Blog'
  }];

  const serviceLinks = [
    { href: '/en/services/alternative-cover', label: 'Alternative Cover' },
    { href: '/en/services/hydroseeding', label: 'Hydroseeding' },
    { href: '/en/services/industrial-deodorant-dust', label: 'Industrial Deodorant' },
    { href: '/en/services/sale-of-sand', label: 'Sale of Sand' },
    { href: '/en/services/earthworks', label: 'Earthworks' },
    { href: '/en/services/planning-business-development', label: 'Planning & Development' }
  ];
  const RSGALogo = () => (
    <Link to={isEnglish ? "/en" : "/"} className="inline-block">
      <img src="/lovable-uploads/d2cfb1f1-73a7-43a6-8542-bf1e8bc0883c.png" alt="RSGA Logo" className="h-8 w-auto" />
    </Link>
  );
  return <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-brand-primary z-50 transition-all duration-100 ease-out" style={{
      width: `${scrollProgress}%`
    }} />
      
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <RSGALogo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map(link => (
                    <NavigationMenuItem key={link.href}>
                      {link.hasDropdown ? (
                        <>
                          <NavigationMenuTrigger className="text-fg-secondary hover:text-brand-primary transition-all duration-300 focus-ring font-medium bg-transparent">
                            {link.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {serviceLinks.map(service => (
                                <NavigationMenuLink key={service.href} asChild>
                                  <Link
                                    to={service.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-tint hover:text-brand-primary focus:bg-brand-tint focus:text-brand-primary"
                                  >
                                    <div className="text-sm font-medium leading-none">{service.label}</div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="text-fg-secondary hover:text-brand-primary transition-all duration-300 link-underline focus-ring font-medium"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Language Switcher */}
              <div className="flex items-center space-x-2 ml-4">
                <Globe className="h-4 w-4 text-fg-muted" />
                <div className="flex items-center space-x-1 text-sm">
                  <Link
                    to="/en"
                    className={`px-2 py-1 rounded transition-colors ${
                      isEnglish 
                        ? 'bg-brand-primary text-white' 
                        : 'text-fg-secondary hover:text-brand-primary'
                    }`}
                  >
                    EN
                  </Link>
                  <span className="text-fg-muted">|</span>
                  <Link
                    to="/"
                    className={`px-2 py-1 rounded transition-colors ${
                      !isEnglish 
                        ? 'bg-brand-primary text-white' 
                        : 'text-fg-secondary hover:text-brand-primary'
                    }`}
                  >
                    LV
                  </Link>
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild variant="default" className="focus-ring bg-brand-primary hover:bg-brand-primary-strong text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to={isEnglish ? "/en/contacts" : "/contacts"}>Contact us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-bg-muted focus-ring transition-colors duration-200" aria-expanded={isMenuOpen} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 border-t border-border-subtle">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.hasDropdown ? (
                      <div className="space-y-2">
                        <Link
                          to={link.href}
                          className="text-fg-secondary hover:text-brand-primary transition-all duration-300 focus-ring px-2 py-1 animate-fade-in font-medium flex items-center"
                          style={{ animationDelay: `${index * 100}ms` }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Link>
                        <div className="ml-4 space-y-2">
                          {serviceLinks.map(service => (
                            <Link
                              key={service.href}
                              to={service.href}
                              className="block text-sm text-fg-muted hover:text-brand-primary transition-all duration-300 focus-ring px-2 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-fg-secondary hover:text-brand-primary transition-all duration-300 focus-ring px-2 py-1 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center space-x-2 px-2 py-1 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <Globe className="h-4 w-4 text-fg-muted" />
                  <div className="flex items-center space-x-1 text-sm">
                    <Link
                      to="/en"
                      className={`px-2 py-1 rounded transition-colors ${
                        isEnglish 
                          ? 'bg-brand-primary text-white' 
                          : 'text-fg-secondary hover:text-brand-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      EN
                    </Link>
                    <span className="text-fg-muted">|</span>
                    <Link
                      to="/"
                      className={`px-2 py-1 rounded transition-colors ${
                        !isEnglish 
                          ? 'bg-brand-primary text-white' 
                          : 'text-fg-secondary hover:text-brand-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      LV
                    </Link>
                  </div>
                </div>

                <div className="pt-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <Button asChild variant="default" className="w-full focus-ring bg-brand-primary hover:bg-brand-primary-strong text-white">
                    <Link to={isEnglish ? "/en/contacts" : "/contacts"} onClick={() => setIsMenuOpen(false)}>
                      Contact us
                    </Link>
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