-- Create storage buckets for media library
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

-- Create storage policies for media files
CREATE POLICY "Media files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'media');

CREATE POLICY "Admin can upload media files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'media');

CREATE POLICY "Admin can update media files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'media');

CREATE POLICY "Admin can delete media files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'media');

-- Add contact_settings to site_settings for email configuration
INSERT INTO public.site_settings (key, value, description) VALUES
('contact_settings', '{"admin_email": "admin@rsga.lv", "notification_enabled": true}', 'Contact form notification settings')
ON CONFLICT (key) DO NOTHING;