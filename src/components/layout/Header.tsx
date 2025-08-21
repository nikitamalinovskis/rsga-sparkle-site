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
  const currentPath = location.pathname;

  // Determine current language and base path
  const getCurrentLanguage = () => {
    if (currentPath.startsWith('/en')) return 'en';
    if (currentPath.startsWith('/ru')) return 'ru';
    return 'lv';
  };

  const getBasePath = () => {
    if (currentPath.startsWith('/en')) return currentPath.replace('/en', '');
    if (currentPath.startsWith('/ru')) return currentPath.replace('/ru', '');
    return currentPath;
  };

  const currentLanguage = getCurrentLanguage();
  const basePath = getBasePath();
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
  const navLinks = currentLanguage === 'en' ? [{
    href: '/en/services',
    label: 'Services',
    hasDropdown: true
  }, {
    href: '/en/about',
    label: 'About'
  }, {
    href: '/en/contacts',
    label: 'Contacts'
  }, {
    href: '/en/blog',
    label: 'Blog'
  }] : currentLanguage === 'ru' ? [{
    href: '/ru/services',
    label: 'Услуги',
    hasDropdown: true
  }, {
    href: '/ru/about',
    label: 'О нас'
  }, {
    href: '/ru/contacts',
    label: 'Контакты'
  }, {
    href: '/ru/blog',
    label: 'Блог'
  }] : [{
    href: '/services',
    label: 'Pakalpojumi',
    hasDropdown: true
  }, {
    href: '/about',
    label: 'Par mums'
  }, {
    href: '/contacts',
    label: 'Kontakti'
  }, {
    href: '/blog',
    label: 'Blogs'
  }];

  const serviceLinks = currentLanguage === 'en' ? [
    { href: '/en/services/alternative-cover', label: 'Alternative cover' },
    { href: '/en/services/hydroseeding', label: 'Hydroseeding' },
    { href: '/en/services/industrial-deodorant-dust', label: 'Industrial deodorant' },
    { href: '/en/services/sale-of-sand', label: 'Sale of sand' },
    { href: '/en/services/earthworks', label: 'Earthworks' },
    { href: '/en/services/planning-business-development', label: 'Business development' }
  ] : currentLanguage === 'ru' ? [
    { href: '/ru/services/alternative-cover', label: 'Альтернативное покрытие' },
    { href: '/ru/services/hydroseeding', label: 'Гидропосев' },
    { href: '/ru/services/industrial-deodorant-dust', label: 'Промышленный дезодорант' },
    { href: '/ru/services/sale-of-sand', label: 'Торговля песком' },
    { href: '/ru/services/earthworks', label: 'Земляные работы' },
    { href: '/ru/services/planning-business-development', label: 'Планирование и развитие' }
  ] : [
    { href: '/services/alternative-cover', label: 'Alternatīvā pārklāšana' },
    { href: '/services/hydroseeding', label: 'Hidrosēja' },
    { href: '/services/industrial-deodorant-dust', label: 'Industriālais dezodorants' },
    { href: '/services/sale-of-sand', label: 'Smilšu tirdzniecība' },
    { href: '/services/earthworks', label: 'Zemes darbi' },
    { href: '/services/planning-business-development', label: 'Plānošana un attīstība' }
  ];

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
            {/* <RSGALogo /> */}
            <Link to={currentLanguage === 'en' ? "/en" : currentLanguage === 'ru' ? "/ru" : "/"} className="inline-block">
              <img src="/lovable-uploads/d2cfb1f1-73a7-43a6-8542-bf1e8bc0883c.png" alt="RSGA Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map(link => (
                  <NavigationMenuItem key={link.href}>
                    {link.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="text-fg-secondary hover:text-brand-primary hover:bg-brand-tint transition-all duration-300 focus-ring font-medium bg-transparent text-base h-auto px-4 py-2 rounded-md">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-border-subtle rounded-lg shadow-lg">
                            {serviceLinks.map(service => (
                              <NavigationMenuLink key={service.href} asChild>
                                <Link
                                  to={service.href}
                                  className="block select-none space-y-1 rounded-md px-6 py-3 leading-none no-underline outline-none transition-colors hover:bg-brand-tint hover:text-brand-primary focus:bg-brand-tint focus:text-brand-primary"
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
          </div>

          {/* Language Switcher & Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-fg-muted" />
              <div className="flex items-center space-x-1 text-sm">
                <Link
                  to={basePath === '' ? '/' : basePath}
                  className={`px-2 py-1 rounded transition-colors ${currentLanguage === 'lv'
                    ? 'bg-brand-primary text-white'
                    : 'text-fg-secondary hover:text-brand-primary'
                    }`}
                >
                  LV
                </Link>
                <span className="text-fg-muted">|</span>
                <Link
                  to={basePath === '' ? '/en' : `/en${basePath}`}
                  className={`px-2 py-1 rounded transition-colors ${currentLanguage === 'en'
                    ? 'bg-brand-primary text-white'
                    : 'text-fg-secondary hover:text-brand-primary'
                    }`}
                >
                  EN
                </Link>
                <span className="text-fg-muted">|</span>
                <Link
                  to={basePath === '' ? '/ru' : `/ru${basePath}`}
                  className={`px-2 py-1 rounded transition-colors ${currentLanguage === 'ru'
                    ? 'bg-brand-primary text-white'
                    : 'text-fg-secondary hover:text-brand-primary'
                    }`}
                >
                  RU
                </Link>
              </div>
            </div>

            <Button asChild variant="default" className="focus-ring bg-brand-primary hover:bg-brand-primary-strong text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to={currentLanguage === 'en' ? "/en/contacts" : currentLanguage === 'ru' ? "/ru/contacts" : "/contacts"}>
                {currentLanguage === 'en' ? 'Contact us' : currentLanguage === 'ru' ? 'Связаться с нами' : 'Sazināties ar mums'}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-bg-muted focus-ring transition-colors duration-200" aria-expanded={isMenuOpen} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-border-subtle bg-white">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <div key={link.href} className="px-4">
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <Link
                        to={link.href}
                        className="text-fg-secondary hover:text-brand-primary transition-all duration-300 focus-ring py-2 font-medium flex items-center text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </Link>
                      <div className="ml-4 space-y-1 bg-bg-subtle rounded-lg p-2">
                        {serviceLinks.map(service => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block text-sm text-fg-muted hover:text-brand-primary transition-all duration-300 focus-ring px-2 py-2 rounded hover:bg-brand-tint"
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
                      className="text-fg-secondary hover:text-brand-primary transition-all duration-300 focus-ring py-2 font-medium text-base block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-2 px-4 py-3 mt-2 border-t border-border-subtle">
                <Globe className="h-4 w-4 text-fg-muted" />
                <div className="flex items-center space-x-1 text-sm">
                  <Link
                    to={basePath === '' ? '/' : basePath}
                    className={`px-3 py-2 rounded transition-colors font-medium ${currentLanguage === 'lv'
                      ? 'bg-brand-primary text-white'
                      : 'text-fg-secondary hover:text-brand-primary hover:bg-brand-tint'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    LV
                  </Link>
                  <span className="text-fg-muted mx-1">|</span>
                  <Link
                    to={basePath === '' ? '/en' : `/en${basePath}`}
                    className={`px-3 py-2 rounded transition-colors font-medium ${currentLanguage === 'en'
                      ? 'bg-brand-primary text-white'
                      : 'text-fg-secondary hover:text-brand-primary hover:bg-brand-tint'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EN
                  </Link>
                  <span className="text-fg-muted mx-1">|</span>
                  <Link
                    to={basePath === '' ? '/ru' : `/ru${basePath}`}
                    className={`px-3 py-2 rounded transition-colors font-medium ${currentLanguage === 'ru'
                      ? 'bg-brand-primary text-white'
                      : 'text-fg-secondary hover:text-brand-primary hover:bg-brand-tint'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    RU
                  </Link>
                </div>
              </div>

              <div className="px-4 pt-4">
                <Button asChild variant="default" className="w-full focus-ring bg-brand-primary hover:bg-brand-primary-strong text-white">
                  <Link to={currentLanguage === 'en' ? "/en/contacts" : currentLanguage === 'ru' ? "/ru/contacts" : "/contacts"} onClick={() => setIsMenuOpen(false)}>
                    {currentLanguage === 'en' ? 'Contact us' : currentLanguage === 'ru' ? 'Связаться с нами' : 'Sazināties ar mums'}
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