import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings,
  Palette,
  Navigation,
  Search,
  BarChart3,
  Mail,
  Globe,
  Shield,
  Zap,
  Save,
  Eye,
  Home,
  MousePointer
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SiteSettings {
  branding: {
    logo_light: string;
    logo_dark: string;
    favicon: string;
    primary_color: string;
    secondary_color: string;
  };
  navigation: {
    header_lv: Array<{ label: string; url: string; }>;
    header_en: Array<{ label: string; url: string; }>;
    header_ru: Array<{ label: string; url: string; }>;
    footer_lv: Array<{ title: string; links: Array<{ label: string; url: string; }>; }>;
    footer_en: Array<{ title: string; links: Array<{ label: string; url: string; }>; }>;
    footer_ru: Array<{ title: string; links: Array<{ label: string; url: string; }>; }>;
    language_switcher_labels: { lv: string; en: string; ru: string; };
  };
  seo_defaults: {
    title_pattern_lv: string;
    title_pattern_en: string;
    title_pattern_ru: string;
    meta_description_lv: string;
    meta_description_en: string;
    meta_description_ru: string;
    hreflang_enabled: boolean;
    sitemap_enabled: boolean;
  };
  analytics: {
    ga4_id: string;
    custom_scripts: string;
  };
  blog_settings: {
    newsletter_enabled: boolean;
    newsletter_text_lv: string;
    newsletter_text_en: string;
    newsletter_text_ru: string;
    newsletter_api_url: string;
    categories_lv: Array<{ name: string; slug: string; }>;
    categories_en: Array<{ name: string; slug: string; }>;
    categories_ru: Array<{ name: string; slug: string; }>;
  };
  functional: {
    scroll_to_top: boolean;
    animation_speed: 'slow' | 'normal' | 'fast';
    breadcrumbs_enabled: boolean;
    breadcrumb_separator: string;
    home_icon: boolean;
    cookie_banner_enabled: boolean;
    cookie_banner_text_lv: string;
    cookie_banner_text_en: string;
    cookie_banner_text_ru: string;
  };
}

const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>({
    branding: {
      logo_light: '',
      logo_dark: '',
      favicon: '',
      primary_color: '#05376c',
      secondary_color: '#f8fafc'
    },
    navigation: {
      header_lv: [],
      header_en: [],
      header_ru: [],
      footer_lv: [],
      footer_en: [],
      footer_ru: [],
      language_switcher_labels: { lv: 'LV', en: 'EN', ru: 'RU' }
    },
    seo_defaults: {
      title_pattern_lv: '{page_title} | RSGA',
      title_pattern_en: '{page_title} | RSGA',
      title_pattern_ru: '{page_title} | RSGA',
      meta_description_lv: '',
      meta_description_en: '',
      meta_description_ru: '',
      hreflang_enabled: true,
      sitemap_enabled: true
    },
    analytics: {
      ga4_id: '',
      custom_scripts: ''
    },
    blog_settings: {
      newsletter_enabled: true,
      newsletter_text_lv: 'Pierakstieties mūsu jaunumiem',
      newsletter_text_en: 'Subscribe to our newsletter',
      newsletter_text_ru: 'Подпишитесь на нашу рассылку',
      newsletter_api_url: '',
      categories_lv: [],
      categories_en: [],
      categories_ru: []
    },
    functional: {
      scroll_to_top: true,
      animation_speed: 'normal',
      breadcrumbs_enabled: true,
      breadcrumb_separator: '/',
      home_icon: true,
      cookie_banner_enabled: false,
      cookie_banner_text_lv: '',
      cookie_banner_text_en: '',
      cookie_banner_text_ru: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) throw error;

      // Transform the data into our settings object
      const settingsMap = (data || []).reduce((acc: any, item: any) => {
        acc[item.key] = item.value;
        return acc;
      }, {});

      setSettings(prev => ({
        branding: settingsMap.branding || prev.branding,
        navigation: settingsMap.navigation || prev.navigation,
        seo_defaults: settingsMap.seo_defaults || prev.seo_defaults,
        analytics: settingsMap.analytics || prev.analytics,
        blog_settings: settingsMap.blog_settings || prev.blog_settings,
        functional: settingsMap.functional || prev.functional
      }));

    } catch (error) {
      console.error('Error loading settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load site settings',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    try {
      setSaving(true);
      
      // Prepare settings for upsert
      const settingsToSave = [
        { key: 'branding', value: settings.branding, description: 'Brand assets and colors' },
        { key: 'navigation', value: settings.navigation, description: 'Navigation menus' },
        { key: 'seo_defaults', value: settings.seo_defaults, description: 'Default SEO settings' },
        { key: 'analytics', value: settings.analytics, description: 'Analytics configuration' },
        { key: 'blog_settings', value: settings.blog_settings, description: 'Blog configuration' },
        { key: 'functional', value: settings.functional, description: 'Functional settings' }
      ];

      for (const setting of settingsToSave) {
        const { error } = await supabase
          .from('site_settings')
          .upsert(setting);

        if (error) throw error;
      }

      toast({
        title: 'Success',
        description: 'Site settings saved successfully'
      });

    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to save site settings',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (section: keyof SiteSettings, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const addNavigationItem = (section: string, language: string) => {
    const navKey = `${section}_${language}` as keyof typeof settings.navigation;
    const currentItems = settings.navigation[navKey] as Array<{ label: string; url: string; }>;
    
    setSettings(prev => ({
      ...prev,
      navigation: {
        ...prev.navigation,
        [navKey]: [...currentItems, { label: '', url: '' }]
      }
    }));
  };

  const removeNavigationItem = (section: string, language: string, index: number) => {
    const navKey = `${section}_${language}` as keyof typeof settings.navigation;
    const currentItems = settings.navigation[navKey] as Array<{ label: string; url: string; }>;
    
    setSettings(prev => ({
      ...prev,
      navigation: {
        ...prev.navigation,
        [navKey]: currentItems.filter((_, i) => i !== index)
      }
    }));
  };

  const updateNavigationItem = (section: string, language: string, index: number, field: string, value: string) => {
    const navKey = `${section}_${language}` as keyof typeof settings.navigation;
    const currentItems = [...(settings.navigation[navKey] as Array<{ label: string; url: string; }>)];
    
    currentItems[index] = { ...currentItems[index], [field]: value };
    
    setSettings(prev => ({
      ...prev,
      navigation: {
        ...prev.navigation,
        [navKey]: currentItems
      }
    }));
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Site Settings</h1>
        <div className="animate-pulse space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fg-primary">Site Settings</h1>
          <p className="text-fg-muted">Configure global website settings and preferences</p>
        </div>
        <Button 
          onClick={saveSettings}
          disabled={saving}
          className="bg-brand-primary hover:bg-brand-primary-strong"
        >
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>

      <Tabs defaultValue="branding" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="functional">Functional</TabsTrigger>
        </TabsList>

        {/* Branding Settings */}
        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Brand Assets & Colors
              </CardTitle>
              <CardDescription>
                Configure your brand identity and visual elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="logo_light">Light Logo URL</Label>
                    <Input
                      id="logo_light"
                      value={settings.branding.logo_light}
                      onChange={(e) => updateSetting('branding', 'logo_light', e.target.value)}
                      placeholder="https://example.com/logo-light.png"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="logo_dark">Dark Logo URL</Label>
                    <Input
                      id="logo_dark"
                      value={settings.branding.logo_dark}
                      onChange={(e) => updateSetting('branding', 'logo_dark', e.target.value)}
                      placeholder="https://example.com/logo-dark.png"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="favicon">Favicon URL</Label>
                    <Input
                      id="favicon"
                      value={settings.branding.favicon}
                      onChange={(e) => updateSetting('branding', 'favicon', e.target.value)}
                      placeholder="https://example.com/favicon.ico"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="primary_color">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primary_color"
                        value={settings.branding.primary_color}
                        onChange={(e) => updateSetting('branding', 'primary_color', e.target.value)}
                        placeholder="#05376c"
                      />
                      <input
                        type="color"
                        value={settings.branding.primary_color}
                        onChange={(e) => updateSetting('branding', 'primary_color', e.target.value)}
                        className="w-12 h-10 rounded border border-border-default"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="secondary_color">Secondary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondary_color"
                        value={settings.branding.secondary_color}
                        onChange={(e) => updateSetting('branding', 'secondary_color', e.target.value)}
                        placeholder="#f8fafc"
                      />
                      <input
                        type="color"
                        value={settings.branding.secondary_color}
                        onChange={(e) => updateSetting('branding', 'secondary_color', e.target.value)}
                        className="w-12 h-10 rounded border border-border-default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Navigation Settings */}
        <TabsContent value="navigation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="h-5 w-5" />
                Navigation Menus
              </CardTitle>
              <CardDescription>
                Configure header and footer navigation for all languages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Header Navigation */}
              <div>
                <h3 className="text-lg font-medium mb-4">Header Navigation</h3>
                <Tabs defaultValue="lv" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="lv">Latvian</TabsTrigger>
                    <TabsTrigger value="en">English</TabsTrigger>
                    <TabsTrigger value="ru">Russian</TabsTrigger>
                  </TabsList>
                  
                  {['lv', 'en', 'ru'].map(lang => (
                    <TabsContent key={lang} value={lang}>
                      <div className="space-y-4">
                        {(settings.navigation[`header_${lang}` as keyof typeof settings.navigation] as Array<{ label: string; url: string; }>).map((item, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              placeholder="Label"
                              value={item.label}
                              onChange={(e) => updateNavigationItem('header', lang, index, 'label', e.target.value)}
                            />
                            <Input
                              placeholder="URL"
                              value={item.url}
                              onChange={(e) => updateNavigationItem('header', lang, index, 'url', e.target.value)}
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeNavigationItem('header', lang, index)}
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          onClick={() => addNavigationItem('header', lang)}
                        >
                          Add Menu Item
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              {/* Language Switcher Labels */}
              <div>
                <h3 className="text-lg font-medium mb-4">Language Switcher</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Latvian Label</Label>
                    <Input
                      value={settings.navigation.language_switcher_labels.lv}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        navigation: {
                          ...prev.navigation,
                          language_switcher_labels: {
                            ...prev.navigation.language_switcher_labels,
                            lv: e.target.value
                          }
                        }
                      }))}
                    />
                  </div>
                  <div>
                    <Label>English Label</Label>
                    <Input
                      value={settings.navigation.language_switcher_labels.en}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        navigation: {
                          ...prev.navigation,
                          language_switcher_labels: {
                            ...prev.navigation.language_switcher_labels,
                            en: e.target.value
                          }
                        }
                      }))}
                    />
                  </div>
                  <div>
                    <Label>Russian Label</Label>
                    <Input
                      value={settings.navigation.language_switcher_labels.ru}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        navigation: {
                          ...prev.navigation,
                          language_switcher_labels: {
                            ...prev.navigation.language_switcher_labels,
                            ru: e.target.value
                          }
                        }
                      }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                SEO & Indexing
              </CardTitle>
              <CardDescription>
                Configure default SEO settings and search engine optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Title Patterns</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Latvian Title Pattern</Label>
                    <Input
                      value={settings.seo_defaults.title_pattern_lv}
                      onChange={(e) => updateSetting('seo_defaults', 'title_pattern_lv', e.target.value)}
                      placeholder="{page_title} | RSGA"
                    />
                  </div>
                  <div>
                    <Label>English Title Pattern</Label>
                    <Input
                      value={settings.seo_defaults.title_pattern_en}
                      onChange={(e) => updateSetting('seo_defaults', 'title_pattern_en', e.target.value)}
                      placeholder="{page_title} | RSGA"
                    />
                  </div>
                  <div>
                    <Label>Russian Title Pattern</Label>
                    <Input
                      value={settings.seo_defaults.title_pattern_ru}
                      onChange={(e) => updateSetting('seo_defaults', 'title_pattern_ru', e.target.value)}
                      placeholder="{page_title} | RSGA"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Default Meta Descriptions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Latvian Description</Label>
                    <Textarea
                      value={settings.seo_defaults.meta_description_lv}
                      onChange={(e) => updateSetting('seo_defaults', 'meta_description_lv', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>English Description</Label>
                    <Textarea
                      value={settings.seo_defaults.meta_description_en}
                      onChange={(e) => updateSetting('seo_defaults', 'meta_description_en', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Russian Description</Label>
                    <Textarea
                      value={settings.seo_defaults.meta_description_ru}
                      onChange={(e) => updateSetting('seo_defaults', 'meta_description_ru', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">SEO Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Hreflang Tags</Label>
                      <p className="text-sm text-fg-muted">Enable multilingual SEO tags</p>
                    </div>
                    <Switch
                      checked={settings.seo_defaults.hreflang_enabled}
                      onCheckedChange={(checked) => updateSetting('seo_defaults', 'hreflang_enabled', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">XML Sitemap</Label>
                      <p className="text-sm text-fg-muted">Generate automatic sitemap</p>
                    </div>
                    <Switch
                      checked={settings.seo_defaults.sitemap_enabled}
                      onCheckedChange={(checked) => updateSetting('seo_defaults', 'sitemap_enabled', checked)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Settings */}
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Analytics & Tracking
              </CardTitle>
              <CardDescription>
                Configure Google Analytics and custom tracking scripts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="ga4_id">Google Analytics 4 Measurement ID</Label>
                <Input
                  id="ga4_id"
                  value={settings.analytics.ga4_id}
                  onChange={(e) => updateSetting('analytics', 'ga4_id', e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                />
                <p className="text-sm text-fg-muted mt-1">
                  Find this in your GA4 property settings under Data Streams
                </p>
              </div>
              
              <div>
                <Label htmlFor="custom_scripts">Custom Tracking Scripts</Label>
                <Textarea
                  id="custom_scripts"
                  value={settings.analytics.custom_scripts}
                  onChange={(e) => updateSetting('analytics', 'custom_scripts', e.target.value)}
                  placeholder="<!-- Insert custom tracking scripts here -->"
                  rows={6}
                />
                <p className="text-sm text-fg-muted mt-1">
                  Additional tracking scripts will be added to the head section
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blog Settings */}
        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Blog & Newsletter
              </CardTitle>
              <CardDescription>
                Configure blog settings and newsletter integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Newsletter Subscription</Label>
                  <p className="text-sm text-fg-muted">Enable newsletter signup forms</p>
                </div>
                <Switch
                  checked={settings.blog_settings.newsletter_enabled}
                  onCheckedChange={(checked) => updateSetting('blog_settings', 'newsletter_enabled', checked)}
                />
              </div>

              {settings.blog_settings.newsletter_enabled && (
                <>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Newsletter Text</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Latvian Text</Label>
                        <Input
                          value={settings.blog_settings.newsletter_text_lv}
                          onChange={(e) => updateSetting('blog_settings', 'newsletter_text_lv', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>English Text</Label>
                        <Input
                          value={settings.blog_settings.newsletter_text_en}
                          onChange={(e) => updateSetting('blog_settings', 'newsletter_text_en', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Russian Text</Label>
                        <Input
                          value={settings.blog_settings.newsletter_text_ru}
                          onChange={(e) => updateSetting('blog_settings', 'newsletter_text_ru', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="newsletter_api_url">Newsletter API URL</Label>
                    <Input
                      id="newsletter_api_url"
                      value={settings.blog_settings.newsletter_api_url}
                      onChange={(e) => updateSetting('blog_settings', 'newsletter_api_url', e.target.value)}
                      placeholder="https://api.mailchimp.com/3.0/lists/..."
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Functional Settings */}
        <TabsContent value="functional">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Functional Settings
              </CardTitle>
              <CardDescription>
                Configure website behavior and user experience features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Scroll to Top</Label>
                      <p className="text-sm text-fg-muted">Reset scroll position on route change</p>
                    </div>
                    <Switch
                      checked={settings.functional.scroll_to_top}
                      onCheckedChange={(checked) => updateSetting('functional', 'scroll_to_top', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Breadcrumbs</Label>
                      <p className="text-sm text-fg-muted">Show navigation breadcrumbs</p>
                    </div>
                    <Switch
                      checked={settings.functional.breadcrumbs_enabled}
                      onCheckedChange={(checked) => updateSetting('functional', 'breadcrumbs_enabled', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Home Icon in Breadcrumbs</Label>
                      <p className="text-sm text-fg-muted">Show home icon in breadcrumbs</p>
                    </div>
                    <Switch
                      checked={settings.functional.home_icon}
                      onCheckedChange={(checked) => updateSetting('functional', 'home_icon', checked)}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label>Animation Speed</Label>
                    <select
                      value={settings.functional.animation_speed}
                      onChange={(e) => updateSetting('functional', 'animation_speed', e.target.value)}
                      className="w-full px-3 py-2 border border-border-default rounded-md bg-white"
                    >
                      <option value="slow">Slow</option>
                      <option value="normal">Normal</option>
                      <option value="fast">Fast</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label>Breadcrumb Separator</Label>
                    <Input
                      value={settings.functional.breadcrumb_separator}
                      onChange={(e) => updateSetting('functional', 'breadcrumb_separator', e.target.value)}
                      placeholder="/"
                    />
                  </div>
                </div>
              </div>

              {/* Cookie Banner */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Label className="text-base">Cookie Consent Banner</Label>
                    <p className="text-sm text-fg-muted">Show GDPR cookie consent notice</p>
                  </div>
                  <Switch
                    checked={settings.functional.cookie_banner_enabled}
                    onCheckedChange={(checked) => updateSetting('functional', 'cookie_banner_enabled', checked)}
                  />
                </div>

                {settings.functional.cookie_banner_enabled && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Latvian Cookie Text</Label>
                      <Textarea
                        value={settings.functional.cookie_banner_text_lv}
                        onChange={(e) => updateSetting('functional', 'cookie_banner_text_lv', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>English Cookie Text</Label>
                      <Textarea
                        value={settings.functional.cookie_banner_text_en}
                        onChange={(e) => updateSetting('functional', 'cookie_banner_text_en', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>Russian Cookie Text</Label>
                      <Textarea
                        value={settings.functional.cookie_banner_text_ru}
                        onChange={(e) => updateSetting('functional', 'cookie_banner_text_ru', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;