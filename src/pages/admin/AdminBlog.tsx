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
  BookOpen,
  Filter,
  Star,
  Pin,
  Mail
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  language: string;
  status: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  pinned: boolean;
  newsletter: boolean;
  author?: string;
  views: number;
  category_id?: string;
}

const AdminBlog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
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
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchQuery, selectedLanguage, selectedStatus]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch blog posts',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(post => post.language === selectedLanguage);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(post => post.status === selectedStatus);
    }

    setFilteredPosts(filtered);
  };

  const handleDeletePost = async (postId: string, postTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${postTitle}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      await fetchPosts();
      toast({
        title: 'Success',
        description: 'Post deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete post',
        variant: 'destructive'
      });
    }
  };

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

  const postsByLanguage = {
    lv: filteredPosts.filter(p => p.language === 'lv'),
    en: filteredPosts.filter(p => p.language === 'en'),
    ru: filteredPosts.filter(p => p.language === 'ru')
  };

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    drafts: posts.filter(p => p.status === 'draft').length,
    featured: posts.filter(p => p.featured).length
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <Button disabled>
            <Plus className="h-4 w-4 mr-2" />
            New Post
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
          <h1 className="text-3xl font-bold text-fg-primary">Blog Posts</h1>
          <p className="text-fg-muted">Manage blog articles across all languages</p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary-strong">
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-fg-muted">Total Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.published}</p>
                <p className="text-xs text-fg-muted">Published</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Edit className="h-4 w-4 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{stats.drafts}</p>
                <p className="text-xs text-fg-muted">Drafts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">{stats.featured}</p>
                <p className="text-xs text-fg-muted">Featured</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-muted h-4 w-4" />
                <Input
                  placeholder="Search posts..."
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
              {filteredPosts.length} posts
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Posts by Language Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({filteredPosts.length})</TabsTrigger>
          <TabsTrigger value="lv">LV ({postsByLanguage.lv.length})</TabsTrigger>
          <TabsTrigger value="en">EN ({postsByLanguage.en.length})</TabsTrigger>
          <TabsTrigger value="ru">RU ({postsByLanguage.ru.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <PostsList posts={filteredPosts} onDelete={handleDeletePost} />
        </TabsContent>
        
        <TabsContent value="lv">
          <PostsList posts={postsByLanguage.lv} onDelete={handleDeletePost} />
        </TabsContent>
        
        <TabsContent value="en">
          <PostsList posts={postsByLanguage.en} onDelete={handleDeletePost} />
        </TabsContent>
        
        <TabsContent value="ru">
          <PostsList posts={postsByLanguage.ru} onDelete={handleDeletePost} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface PostsListProps {
  posts: BlogPost[];
  onDelete: (postId: string, postTitle: string) => void;
}

const PostsList: React.FC<PostsListProps> = ({ posts, onDelete }) => {
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

  if (posts.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <BookOpen className="h-12 w-12 text-fg-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-fg-primary mb-2">No posts found</h3>
          <p className="text-fg-muted mb-4">Get started by writing your first blog post.</p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Write Post
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-fg-primary">{post.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {post.language.toUpperCase()}
                  </Badge>
                  <Badge variant={getStatusBadge(post.status)}>
                    {post.status}
                  </Badge>
                  {post.featured && (
                    <Badge variant="outline" className="text-yellow-600">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {post.pinned && (
                    <Badge variant="outline" className="text-blue-600">
                      <Pin className="h-3 w-3 mr-1" />
                      Pinned
                    </Badge>
                  )}
                  {post.newsletter && (
                    <Badge variant="outline" className="text-purple-600">
                      <Mail className="h-3 w-3 mr-1" />
                      Newsletter
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-fg-muted mb-2">
                  <span>/{post.slug}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.published_at)}
                  </span>
                  {post.author && (
                    <span>by {post.author}</span>
                  )}
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {post.views} views
                  </span>
                </div>
                
                <div className="text-xs text-fg-muted">
                  Last updated: {formatDate(post.updated_at)}
                </div>
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
                  onClick={() => onDelete(post.id, post.title)}
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

export default AdminBlog;