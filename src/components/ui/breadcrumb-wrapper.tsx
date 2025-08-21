import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbWrapperProps {
  className?: string;
}

const BreadcrumbWrapper: React.FC<BreadcrumbWrapperProps> = ({ className }) => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    // Don't show breadcrumbs on home page or admin pages
    if (path === '/' || path.startsWith('/admin')) {
      setBreadcrumbs([]);
      return;
    }

    const items: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += '/' + segment;
      
      // Generate human-readable labels
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Handle language prefixes
      if (segment === 'en') {
        label = 'English';
      } else if (segment === 'ru') {
        label = 'Русский';
      }
      
      // Handle common segments
      if (segment === 'services') {
        label = 'Services';
      } else if (segment === 'blog') {
        label = 'Blog';
      } else if (segment === 'about') {
        label = 'About';
      } else if (segment === 'contacts') {
        label = 'Contacts';
      }

      // Last item is not a link
      if (index === segments.length - 1) {
        items.push({ label });
      } else {
        items.push({ label, href: currentPath });
      }
    });

    setBreadcrumbs(items);

    // Generate JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(item.href && { "item": `${window.location.origin}${item.href}` })
      }))
    };

    // Add or update JSON-LD script tag
    let script = document.querySelector('script[data-type="breadcrumb-jsonld"]') as HTMLScriptElement;
    if (script) {
      script.textContent = JSON.stringify(jsonLd);
    } else {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'breadcrumb-jsonld');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up when component unmounts
      const existingScript = document.querySelector('script[data-type="breadcrumb-jsonld"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [location.pathname]);

  if (breadcrumbs.length === 0) return null;

  return (
    <div className={`bg-bg-subtle border-b border-border-subtle py-3 ${className || ''}`}>
      <div className="container-3of4">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href} className="flex items-center gap-1">
                      {index === 0 && <Home className="h-4 w-4" />}
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="flex items-center gap-1">
                      {index === 0 && <Home className="h-4 w-4" />}
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbWrapper;