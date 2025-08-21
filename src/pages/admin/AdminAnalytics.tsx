import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3,
  Users,
  Eye,
  TrendingUp,
  TrendingDown,
  Globe,
  Clock,
  ExternalLink,
  Calendar,
  Activity,
  Zap,
  Target
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AnalyticsData {
  pageViews: {
    total: number;
    lastWeek: number;
    change: number;
  };
  uniqueVisitors: {
    total: number;
    lastWeek: number;
    change: number;
  };
  contactSubmissions: {
    total: number;
    lastWeek: number;
    change: number;
  };
  topPages: Array<{
    path: string;
    views: number;
    language: string;
  }>;
  languageDistribution: {
    lv: number;
    en: number;
    ru: number;
  };
  trafficSources: Array<{
    source: string;
    visitors: number;
    percentage: number;
  }>;
}

const AdminAnalytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: { total: 0, lastWeek: 0, change: 0 },
    uniqueVisitors: { total: 0, lastWeek: 0, change: 0 },
    contactSubmissions: { total: 0, lastWeek: 0, change: 0 },
    topPages: [],
    languageDistribution: { lv: 0, en: 0, ru: 0 },
    trafficSources: []
  });
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7d');
  const [ga4Id, setGa4Id] = useState('');
  const { toast } = useToast();

  const dateRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' }
  ];

  useEffect(() => {
    fetchAnalytics();
    loadGA4Settings();
  }, [dateRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      
      // Calculate date ranges
      const endDate = new Date();
      const startDate = new Date();
      const prevStartDate = new Date();
      
      switch (dateRange) {
        case '7d':
          startDate.setDate(endDate.getDate() - 7);
          prevStartDate.setDate(endDate.getDate() - 14);
          break;
        case '30d':
          startDate.setDate(endDate.getDate() - 30);
          prevStartDate.setDate(endDate.getDate() - 60);
          break;
        case '90d':
          startDate.setDate(endDate.getDate() - 90);
          prevStartDate.setDate(endDate.getDate() - 180);
          break;
      }

      // Fetch page analytics
      const { data: pageAnalytics } = await supabase
        .from('page_analytics')
        .select('*')
        .gte('date', startDate.toISOString().split('T')[0])
        .lte('date', endDate.toISOString().split('T')[0]);

      const { data: prevPageAnalytics } = await supabase
        .from('page_analytics')
        .select('*')
        .gte('date', prevStartDate.toISOString().split('T')[0])
        .lt('date', startDate.toISOString().split('T')[0]);

      // Fetch contact submissions
      const { data: contacts } = await supabase
        .from('contacts')
        .select('*')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString());

      const { data: prevContacts } = await supabase
        .from('contacts')
        .select('*')
        .gte('created_at', prevStartDate.toISOString())
        .lt('created_at', startDate.toISOString());

      // Calculate metrics
      const currentPageViews = pageAnalytics?.reduce((sum, p) => sum + (p.views || 0), 0) || 0;
      const currentUniqueViews = pageAnalytics?.reduce((sum, p) => sum + (p.unique_views || 0), 0) || 0;
      const currentContacts = contacts?.length || 0;

      const prevPageViews = prevPageAnalytics?.reduce((sum, p) => sum + (p.views || 0), 0) || 0;
      const prevUniqueViews = prevPageAnalytics?.reduce((sum, p) => sum + (p.unique_views || 0), 0) || 0;
      const prevContactsCount = prevContacts?.length || 0;

      // Calculate changes
      const pageViewsChange = prevPageViews > 0 ? ((currentPageViews - prevPageViews) / prevPageViews) * 100 : 0;
      const uniqueVisitorsChange = prevUniqueViews > 0 ? ((currentUniqueViews - prevUniqueViews) / prevUniqueViews) * 100 : 0;
      const contactsChange = prevContactsCount > 0 ? ((currentContacts - prevContactsCount) / prevContactsCount) * 100 : 0;

      // Top pages
      const pageGroups = pageAnalytics?.reduce((acc: any, page: any) => {
        const key = `${page.page_path}-${page.language}`;
        if (!acc[key]) {
          acc[key] = {
            path: page.page_path,
            language: page.language,
            views: 0
          };
        }
        acc[key].views += page.views || 0;
        return acc;
      }, {});

      const topPages = Object.values(pageGroups || {})
        .sort((a: any, b: any) => b.views - a.views)
        .slice(0, 10) as any[];

      // Language distribution
      const languageStats = contacts?.reduce((acc: any, contact: any) => {
        acc[contact.language] = (acc[contact.language] || 0) + 1;
        return acc;
      }, { lv: 0, en: 0, ru: 0 });

      // Mock traffic sources (would need GA4 integration for real data)
      const mockTrafficSources = [
        { source: 'Direct', visitors: Math.floor(currentUniqueViews * 0.4), percentage: 40 },
        { source: 'Organic Search', visitors: Math.floor(currentUniqueViews * 0.35), percentage: 35 },
        { source: 'Referral', visitors: Math.floor(currentUniqueViews * 0.15), percentage: 15 },
        { source: 'Social Media', visitors: Math.floor(currentUniqueViews * 0.1), percentage: 10 }
      ];

      setAnalytics({
        pageViews: {
          total: currentPageViews,
          lastWeek: currentPageViews,
          change: pageViewsChange
        },
        uniqueVisitors: {
          total: currentUniqueViews,
          lastWeek: currentUniqueViews,
          change: uniqueVisitorsChange
        },
        contactSubmissions: {
          total: currentContacts,
          lastWeek: currentContacts,
          change: contactsChange
        },
        topPages,
        languageDistribution: languageStats || { lv: 0, en: 0, ru: 0 },
        trafficSources: mockTrafficSources
      });

    } catch (error) {
      console.error('Error fetching analytics:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch analytics data',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const loadGA4Settings = async () => {
    try {
      const { data } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'analytics')
        .single();

      if (data?.value && typeof data.value === 'object' && data.value !== null && 'ga4_id' in data.value) {
        setGa4Id((data.value as any).ga4_id || '');
      }
    } catch (error) {
      // Settings not found, that's ok
    }
  };

  const saveGA4Settings = async () => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({
          key: 'analytics',
          value: { ga4_id: ga4Id, custom_scripts: '' },
          description: 'Analytics configuration'
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'GA4 settings saved successfully'
      });
    } catch (error) {
      console.error('Error saving GA4 settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to save GA4 settings',
        variant: 'destructive'
      });
    }
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(1)}%`;
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Activity className="h-4 w-4 text-gray-600" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="animate-pulse space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fg-primary">Analytics</h1>
          <p className="text-fg-muted">Website performance and visitor insights</p>
        </div>
        
        <div className="flex gap-2 items-center">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
          >
            {dateRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-fg-muted">Page Views</p>
                <p className="text-2xl font-bold text-fg-primary">
                  {analytics.pageViews.total.toLocaleString()}
                </p>
                <div className={`flex items-center gap-1 text-sm mt-1 ${getChangeColor(analytics.pageViews.change)}`}>
                  {getChangeIcon(analytics.pageViews.change)}
                  <span>{formatChange(analytics.pageViews.change)}</span>
                </div>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-fg-muted">Unique Visitors</p>
                <p className="text-2xl font-bold text-fg-primary">
                  {analytics.uniqueVisitors.total.toLocaleString()}
                </p>
                <div className={`flex items-center gap-1 text-sm mt-1 ${getChangeColor(analytics.uniqueVisitors.change)}`}>
                  {getChangeIcon(analytics.uniqueVisitors.change)}
                  <span>{formatChange(analytics.uniqueVisitors.change)}</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-fg-muted">Contact Submissions</p>
                <p className="text-2xl font-bold text-fg-primary">
                  {analytics.contactSubmissions.total.toLocaleString()}
                </p>
                <div className={`flex items-center gap-1 text-sm mt-1 ${getChangeColor(analytics.contactSubmissions.change)}`}>
                  {getChangeIcon(analytics.contactSubmissions.change)}
                  <span>{formatChange(analytics.contactSubmissions.change)}</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Top Pages
            </CardTitle>
            <CardDescription>Most viewed pages by language</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topPages.length > 0 ? (
                analytics.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-bg-subtle rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-primary text-white rounded text-xs flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-fg-primary">{page.path}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {page.language.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-fg-primary">{page.views.toLocaleString()}</p>
                      <p className="text-xs text-fg-muted">views</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-fg-muted">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No page data available yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Language Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language Distribution
            </CardTitle>
            <CardDescription>Visitor preferences by language</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(analytics.languageDistribution).map(([lang, count]) => {
                const total = Object.values(analytics.languageDistribution).reduce((a, b) => a + b, 0);
                const percentage = total > 0 ? (count / total * 100).toFixed(1) : 0;
                
                return (
                  <div key={lang} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{lang.toUpperCase()}</Badge>
                      <span className="text-fg-primary font-medium">
                        {lang === 'lv' ? 'Latvian' : lang === 'en' ? 'English' : 'Russian'}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-fg-primary">{count}</p>
                      <p className="text-xs text-fg-muted">{percentage}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
            <CardDescription>Where visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-fg-primary">{source.source}</p>
                    <div className="w-full bg-bg-muted rounded-full h-2 mt-1">
                      <div 
                        className="bg-brand-primary h-2 rounded-full" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-fg-primary">{source.visitors.toLocaleString()}</p>
                    <p className="text-xs text-fg-muted">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* GA4 Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Google Analytics 4
            </CardTitle>
            <CardDescription>Connect your GA4 property for enhanced analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-fg-primary mb-2 block">
                  Measurement ID
                </label>
                <Input
                  placeholder="G-XXXXXXXXXX"
                  value={ga4Id}
                  onChange={(e) => setGa4Id(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button onClick={saveGA4Settings} className="flex-1">
                  Save Configuration
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://analytics.google.com/', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open GA4
                </Button>
              </div>
              
              <div className="text-xs text-fg-muted">
                <p className="mb-1">To find your Measurement ID:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Go to Google Analytics</li>
                  <li>Select Admin → Data Streams</li>
                  <li>Click on your web stream</li>
                  <li>Copy the Measurement ID (starts with G-)</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;