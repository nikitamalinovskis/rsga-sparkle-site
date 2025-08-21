-- Create admin users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Admin users can manage their own records
CREATE POLICY "Admin users can view their own record" 
ON public.admin_users 
FOR SELECT 
USING (TRUE);

-- Create pages table for CMS
CREATE TABLE public.pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('lv', 'en', 'ru')),
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  noindex BOOLEAN DEFAULT FALSE,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image TEXT,
  schema_type TEXT DEFAULT 'WebPage',
  breadcrumb_label TEXT,
  sitemap_enabled BOOLEAN DEFAULT TRUE,
  sitemap_priority DECIMAL(2,1) DEFAULT 0.5,
  sitemap_changefreq TEXT DEFAULT 'monthly',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  hero_headline TEXT,
  hero_subheadline TEXT,
  hero_cta_label TEXT,
  hero_cta_url TEXT,
  hero_background TEXT,
  body JSONB,
  sidebar JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(slug, language)
);

ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pages are publicly readable" 
ON public.pages 
FOR SELECT 
USING (TRUE);

-- Create blog categories table
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('lv', 'en', 'ru')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(slug, language)
);

ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog categories are publicly readable" 
ON public.blog_categories 
FOR SELECT 
USING (TRUE);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID, -- For linking translations
  language TEXT NOT NULL CHECK (language IN ('lv', 'en', 'ru')),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  excerpt TEXT,
  body TEXT NOT NULL,
  cover_image TEXT,
  cover_image_alt TEXT,
  author TEXT,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  category_id UUID REFERENCES public.blog_categories(id),
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  pinned BOOLEAN DEFAULT FALSE,
  newsletter BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(slug, language)
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (TRUE);

-- Create services table
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  language TEXT NOT NULL CHECK (language IN ('lv', 'en', 'ru')),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  short_description TEXT,
  description TEXT,
  service_type TEXT NOT NULL CHECK (service_type IN ('core', 'additional')),
  icon TEXT,
  header_image TEXT,
  gallery TEXT[],
  benefits JSONB,
  cta_label TEXT,
  cta_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  ordering_index INTEGER DEFAULT 0,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(slug, language)
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are publicly readable" 
ON public.services 
FOR SELECT 
USING (TRUE);

-- Create contacts table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  source_page TEXT,
  language TEXT NOT NULL CHECK (language IN ('lv', 'en', 'ru')),
  consent BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Contacts are publicly insertable" 
ON public.contacts 
FOR INSERT 
WITH CHECK (TRUE);

-- Create page analytics table
CREATE TABLE public.page_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('lv', 'en', 'ru')),
  views INTEGER DEFAULT 0,
  unique_views INTEGER DEFAULT 0,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(page_path, language, date)
);

ALTER TABLE public.page_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Page analytics are publicly readable" 
ON public.page_analytics 
FOR SELECT 
USING (TRUE);

-- Create media library table
CREATE TABLE public.media_library (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT,
  mime_type TEXT,
  file_type TEXT CHECK (file_type IN ('image', 'video', 'document')),
  folder TEXT DEFAULT 'root',
  title TEXT,
  description TEXT,
  alt_text_lv TEXT,
  alt_text_en TEXT,
  alt_text_ru TEXT,
  thumbnail_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Media library is publicly readable" 
ON public.media_library 
FOR SELECT 
USING (TRUE);

-- Create site settings table
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value JSONB,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Site settings are publicly readable" 
ON public.site_settings 
FOR SELECT 
USING (TRUE);

-- Insert default site settings
INSERT INTO public.site_settings (key, value, description) VALUES
('branding', '{"logo_light": "", "logo_dark": "", "favicon": "", "primary_color": "#05376c"}', 'Brand assets and colors'),
('navigation', '{"header_lv": [], "header_en": [], "header_ru": [], "footer_lv": [], "footer_en": [], "footer_ru": []}', 'Navigation menus'),
('seo_defaults', '{"title_pattern_lv": "", "title_pattern_en": "", "title_pattern_ru": "", "meta_description_lv": "", "meta_description_en": "", "meta_description_ru": ""}', 'Default SEO settings'),
('analytics', '{"ga4_id": "", "custom_scripts": ""}', 'Analytics configuration'),
('blog_settings', '{"newsletter_enabled": true, "categories_lv": [], "categories_en": [], "categories_ru": []}', 'Blog configuration'),
('functional', '{"scroll_to_top": true, "animation_speed": "normal", "breadcrumbs_enabled": true, "breadcrumb_separator": "/", "home_icon": true}', 'Functional settings');

-- Create redirects table
CREATE TABLE public.redirects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  from_url TEXT NOT NULL UNIQUE,
  to_url TEXT NOT NULL,
  status_code INTEGER DEFAULT 301,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Redirects are publicly readable" 
ON public.redirects 
FOR SELECT 
USING (TRUE);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON public.pages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_media_library_updated_at
  BEFORE UPDATE ON public.media_library
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();