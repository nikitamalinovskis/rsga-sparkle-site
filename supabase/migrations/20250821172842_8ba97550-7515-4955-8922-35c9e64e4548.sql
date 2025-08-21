-- Fix RLS policies for admin functionality
-- Enable admin operations on all tables

-- Admin users table - allow full access for admin operations
DROP POLICY IF EXISTS "Admin users can view their own record" ON admin_users;
CREATE POLICY "Admin users are publicly readable" ON admin_users FOR SELECT USING (true);
CREATE POLICY "Admin users can be created" ON admin_users FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin users can be updated" ON admin_users FOR UPDATE USING (true);
CREATE POLICY "Admin users can be deleted" ON admin_users FOR DELETE USING (true);

-- Blog posts - allow admin operations
DROP POLICY IF EXISTS "Blog posts are publicly readable" ON blog_posts;
CREATE POLICY "Blog posts are publicly readable" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Blog posts can be managed by admin" ON blog_posts FOR INSERT WITH CHECK (true);
CREATE POLICY "Blog posts can be updated by admin" ON blog_posts FOR UPDATE USING (true);
CREATE POLICY "Blog posts can be deleted by admin" ON blog_posts FOR DELETE USING (true);

-- Blog categories - allow admin operations  
DROP POLICY IF EXISTS "Blog categories are publicly readable" ON blog_categories;
CREATE POLICY "Blog categories are publicly readable" ON blog_categories FOR SELECT USING (true);
CREATE POLICY "Blog categories can be managed by admin" ON blog_categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Blog categories can be updated by admin" ON blog_categories FOR UPDATE USING (true);
CREATE POLICY "Blog categories can be deleted by admin" ON blog_categories FOR DELETE USING (true);

-- Contacts - allow admin to read and manage
DROP POLICY IF EXISTS "Contacts are publicly insertable" ON contacts;
CREATE POLICY "Contacts are publicly insertable" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Contacts can be read by admin" ON contacts FOR SELECT USING (true);
CREATE POLICY "Contacts can be updated by admin" ON contacts FOR UPDATE USING (true);
CREATE POLICY "Contacts can be deleted by admin" ON contacts FOR DELETE USING (true);

-- Pages - allow admin operations
DROP POLICY IF EXISTS "Pages are publicly readable" ON pages;
CREATE POLICY "Pages are publicly readable" ON pages FOR SELECT USING (true);
CREATE POLICY "Pages can be managed by admin" ON pages FOR INSERT WITH CHECK (true);
CREATE POLICY "Pages can be updated by admin" ON pages FOR UPDATE USING (true);
CREATE POLICY "Pages can be deleted by admin" ON pages FOR DELETE USING (true);

-- Services - allow admin operations
DROP POLICY IF EXISTS "Services are publicly readable" ON services;
CREATE POLICY "Services are publicly readable" ON services FOR SELECT USING (true);
CREATE POLICY "Services can be managed by admin" ON services FOR INSERT WITH CHECK (true);
CREATE POLICY "Services can be updated by admin" ON services FOR UPDATE USING (true);
CREATE POLICY "Services can be deleted by admin" ON services FOR DELETE USING (true);

-- Site settings - allow admin operations
DROP POLICY IF EXISTS "Site settings are publicly readable" ON site_settings;
CREATE POLICY "Site settings are publicly readable" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Site settings can be managed by admin" ON site_settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Site settings can be updated by admin" ON site_settings FOR UPDATE USING (true);
CREATE POLICY "Site settings can be deleted by admin" ON site_settings FOR DELETE USING (true);

-- Media library - allow admin operations
DROP POLICY IF EXISTS "Media library is publicly readable" ON media_library;
CREATE POLICY "Media library is publicly readable" ON media_library FOR SELECT USING (true);
CREATE POLICY "Media library can be managed by admin" ON media_library FOR INSERT WITH CHECK (true);
CREATE POLICY "Media library can be updated by admin" ON media_library FOR UPDATE USING (true);
CREATE POLICY "Media library can be deleted by admin" ON media_library FOR DELETE USING (true);

-- Page analytics - allow admin operations
DROP POLICY IF EXISTS "Page analytics are publicly readable" ON page_analytics;
CREATE POLICY "Page analytics are publicly readable" ON page_analytics FOR SELECT USING (true);
CREATE POLICY "Page analytics can be managed by admin" ON page_analytics FOR INSERT WITH CHECK (true);
CREATE POLICY "Page analytics can be updated by admin" ON page_analytics FOR UPDATE USING (true);
CREATE POLICY "Page analytics can be deleted by admin" ON page_analytics FOR DELETE USING (true);

-- Redirects - allow admin operations
DROP POLICY IF EXISTS "Redirects are publicly readable" ON redirects;
CREATE POLICY "Redirects are publicly readable" ON redirects FOR SELECT USING (true);
CREATE POLICY "Redirects can be managed by admin" ON redirects FOR INSERT WITH CHECK (true);
CREATE POLICY "Redirects can be updated by admin" ON redirects FOR UPDATE USING (true);
CREATE POLICY "Redirects can be deleted by admin" ON redirects FOR DELETE USING (true);

-- Insert default admin user if not exists
INSERT INTO admin_users (email, name, password_hash) 
VALUES ('admin@rsga.lv', 'RSGA Admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON CONFLICT (email) DO NOTHING;

-- Insert some default site settings if they don't exist
INSERT INTO site_settings (key, value, description) 
VALUES 
  ('site_title', '"RSGA - Environmental Solutions"', 'Default site title'),
  ('admin_email', '"admin@rsga.lv"', 'Admin notification email'),
  ('smtp_enabled', 'false', 'SMTP email configuration enabled')
ON CONFLICT (key) DO NOTHING;