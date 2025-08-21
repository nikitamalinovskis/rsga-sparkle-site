import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Search, 
  Edit, 
  Eye, 
  Trash2, 
  Globe,
  Calendar,
  FileText,
  Settings
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Page {
  id: string;
  title: string;
  slug: string;
  language: string;
  status: string;
  updated_at: string;
  meta_title?: string;
  meta_description?: string;
}

const AdminPages: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [filteredPages, setFilteredPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const { toast } = useToast();

  const languages = [
    { code: 'all', name: 'All Languages' },
    { code: 'lv', name: 'Latvian' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' }
  ];

  const statuses = [
    { code: 'all', name: 'All Status' },
    { code: 'published', name: 'Published' },
    { code: 'draft', name: 'Draft' },
    { code: 'scheduled', name: 'Scheduled' }
  ];

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    filterPages();
  }, [pages, searchQuery, selectedLanguage, selectedStatus]);

  const fetchPages = async () => {
    try {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setPages(data || []);
    } catch (error) {
      console.error('Error fetching pages:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch pages',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterPages = () => {
    let filtered = pages;

    if (searchQuery) {
      filtered = filtered.filter(page =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(page => page.language === selectedLanguage);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(page => page.status === selectedStatus);
    }

    setFilteredPages(filtered);
  };

  const handleDeletePage = async (pageId: string, pageTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${pageTitle}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', pageId);

      if (error) throw error;

      await fetchPages();
      toast({
        title: 'Success',
        description: 'Page deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting page:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete page',
        variant: 'destructive'
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      published: 'default',
      draft: 'secondary',
      scheduled: 'outline'
    };
    const colors = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-gray-100 text-gray-800',
      scheduled: 'bg-blue-100 text-blue-800'
    };
    return { variant: variants[status as keyof typeof variants] || 'secondary', className: colors[status as keyof typeof colors] };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const pagesByLanguage = {
    lv: filteredPages.filter(p => p.language === 'lv'),
    en: filteredPages.filter(p => p.language === 'en'),
    ru: filteredPages.filter(p => p.language === 'ru')
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Pages</h1>
          <Button disabled>
            <Plus className="h-4 w-4 mr-2" />
            New Page
          </Button>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="animate-pulse space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-bg-muted rounded"></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fg-primary">Pages</h1>
          <p className="text-fg-muted">Manage website pages across all languages</p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary-strong">
          <Plus className="h-4 w-4 mr-2" />
          New Page
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-muted h-4 w-4" />
                <Input
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
              
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
              >
                {statuses.map(status => (
                  <option key={status.code} value={status.code}>{status.name}</option>
                ))}
              </select>
            </div>
            
            <Badge variant="outline" className="whitespace-nowrap">
              {filteredPages.length} pages
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Pages by Language Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({filteredPages.length})</TabsTrigger>
          <TabsTrigger value="lv">LV ({pagesByLanguage.lv.length})</TabsTrigger>
          <TabsTrigger value="en">EN ({pagesByLanguage.en.length})</TabsTrigger>
          <TabsTrigger value="ru">RU ({pagesByLanguage.ru.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <PagesList pages={filteredPages} onDelete={handleDeletePage} />
        </TabsContent>
        
        <TabsContent value="lv">
          <PagesList pages={pagesByLanguage.lv} onDelete={handleDeletePage} />
        </TabsContent>
        
        <TabsContent value="en">
          <PagesList pages={pagesByLanguage.en} onDelete={handleDeletePage} />
        </TabsContent>
        
        <TabsContent value="ru">
          <PagesList pages={pagesByLanguage.ru} onDelete={handleDeletePage} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface PagesListProps {
  pages: Page[];
  onDelete: (pageId: string, pageTitle: string) => void;
}

const PagesList: React.FC<PagesListProps> = ({ pages, onDelete }) => {
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
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (pages.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <FileText className="h-12 w-12 text-fg-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-fg-primary mb-2">No pages found</h3>
          <p className="text-fg-muted mb-4">Get started by creating your first page.</p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Page
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {pages.map((page) => (
        <Card key={page.id} className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-fg-primary">{page.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {page.language.toUpperCase()}
                  </Badge>
                  <Badge variant={getStatusBadge(page.status)}>
                    {page.status}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-fg-muted">
                  <span>/{page.slug}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(page.updated_at)}
                  </span>
                </div>
                
                {(page.meta_title || page.meta_description) && (
                  <div className="mt-2 text-xs text-fg-muted">
                    SEO: {page.meta_title ? '✓ Title' : '✗ Title'} | {page.meta_description ? '✓ Description' : '✗ Description'}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onDelete(page.id, page.title)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminPages;