import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  BookOpen, 
  Mail, 
  Eye, 
  TrendingUp,
  Users,
  Globe,
  Calendar
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { TestButtons } from '@/components/admin/TestButtons';

interface DashboardStats {
  pages: number;
  blogPosts: number;
  contacts: number;
  totalViews: number;
  publishedPages: number;
  draftPages: number;
  newContacts: number;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    pages: 0,
    blogPosts: 0,
    contacts: 0,
    totalViews: 0,
    publishedPages: 0,
    draftPages: 0,
    newContacts: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentContent, setRecentContent] = useState<any[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch basic stats
      const [pagesResult, postsResult, contactsResult] = await Promise.all([
        supabase.from('pages').select('*', { count: 'exact' }),
        supabase.from('blog_posts').select('*', { count: 'exact' }),
        supabase.from('contacts').select('*', { count: 'exact' })
      ]);

      // Fetch published vs draft pages
      const [publishedResult, draftResult] = await Promise.all([
        supabase.from('pages').select('*', { count: 'exact' }).eq('status', 'published'),
        supabase.from('pages').select('*', { count: 'exact' }).eq('status', 'draft')
      ]);

      // Fetch new contacts (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const newContactsResult = await supabase
        .from('contacts')
        .select('*', { count: 'exact' })
        .gte('created_at', sevenDaysAgo.toISOString());

      // Fetch recent content for activity feed
      const recentPagesResult = await supabase
        .from('pages')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(5);

      const recentPostsResult = await supabase
        .from('blog_posts')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(5);

      setStats({
        pages: pagesResult.count || 0,
        blogPosts: postsResult.count || 0,
        contacts: contactsResult.count || 0,
        totalViews: 0, // TODO: Calculate from analytics
        publishedPages: publishedResult.count || 0,
        draftPages: draftResult.count || 0,
        newContacts: newContactsResult.count || 0
      });

      // Combine recent content
      const combinedRecent = [
        ...(recentPagesResult.data || []).map(item => ({ ...item, type: 'page' })),
        ...(recentPostsResult.data || []).map(item => ({ ...item, type: 'post' }))
      ].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 8);

      setRecentContent(combinedRecent);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Pages',
      value: stats.pages,
      description: `${stats.publishedPages} published, ${stats.draftPages} drafts`,
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Blog Posts',
      value: stats.blogPosts,
      description: 'Across all languages',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Contacts',
      value: stats.contacts,
      description: `${stats.newContacts} new this week`,
      icon: Mail,
      color: 'text-purple-600'
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      description: 'Last 30 days',
      icon: Eye,
      color: 'text-orange-600'
    }
  ];

  const getStatusBadge = (status: string): "default" | "secondary" | "outline" | "destructive" => {
    const variants: { [key: string]: "default" | "secondary" | "outline" | "destructive" } = {
      published: 'default',
      draft: 'secondary',
      scheduled: 'outline'
    };
    return variants[status] || 'secondary';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-fg-primary">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-bg-muted rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-fg-primary">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-fg-muted" />
          <span className="text-sm text-fg-muted">Multi-language CMS</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-fg-secondary">
                  {card.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-fg-primary">{card.value}</div>
                <p className="text-xs text-fg-muted mt-1">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest content updates across all languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContent.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-bg-subtle rounded-lg">
                    <div className="flex items-center gap-3">
                      {item.type === 'page' ? (
                        <FileText className="h-4 w-4 text-blue-600" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-green-600" />
                      )}
                      <div>
                        <p className="font-medium text-fg-primary">{item.title}</p>
                        <div className="flex items-center gap-2 text-xs text-fg-muted">
                          <Badge variant="outline" className="text-xs">
                            {item.language?.toUpperCase()}
                          </Badge>
                          <span>{formatDate(item.updated_at)}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={getStatusBadge(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/admin/pages')}>
                  <FileText className="h-4 w-4 mr-2" />
                  Create New Page
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/admin/blog')}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Write Blog Post
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/admin/services')}>
                  <Users className="h-4 w-4 mr-2" />
                  Manage Services
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/admin/contacts')}>
                  <Mail className="h-4 w-4 mr-2" />
                  Check New Contacts
                </Button>
              </div>
            </CardContent>
          </Card>

          <TestButtons />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;