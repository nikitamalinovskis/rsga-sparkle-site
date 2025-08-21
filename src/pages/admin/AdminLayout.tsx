import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  LogOut, 
  Home, 
  FileText, 
  BookOpen, 
  Mail, 
  BarChart3, 
  ImageIcon, 
  Settings,
  Menu,
  X,
  Bell
} from 'lucide-react';
import SEO from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  onLogout: () => void;
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Pages', href: '/admin/pages', icon: FileText },
    { name: 'Blog Posts', href: '/admin/blog', icon: BookOpen },
    { name: 'Services', href: '/admin/services', icon: Settings },
    { name: 'Contacts', href: '/admin/contacts', icon: Mail },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Media Library', href: '/admin/media', icon: ImageIcon },
    { name: 'Site Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    onLogout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out'
    });
  };

  const isActivePath = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <SEO
        title="Admin Panel - RSGA"
        description="Content management system for RSGA website"
      />
      <div className="min-h-screen bg-bg-subtle">
        {/* Header */}
        <header className="bg-white border-b border-border-subtle sticky top-0 z-50">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <div className="flex items-center gap-3">
                <img 
                  src="/public/rsga_logo_footer.png" 
                  alt="RSGA" 
                  className="h-8 cursor-pointer"
                  onClick={() => navigate('/admin')}
                />
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  Admin Panel
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-muted h-4 w-4" />
                <Input
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-64 hidden md:block"
                />
              </div>
              
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout}
                className="text-fg-secondary hover:text-destructive"
              >
                <LogOut className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className={`
            ${sidebarOpen ? 'w-64' : 'w-0 md:w-16'} 
            bg-white border-r border-border-subtle transition-all duration-300 overflow-hidden
            ${sidebarOpen ? '' : 'md:overflow-visible'}
          `}>
            <nav className="p-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePath(item.href);
                
                return (
                  <Button
                    key={item.name}
                    variant={isActive ? "default" : "ghost"}
                    className={`
                      w-full justify-start gap-3 h-10
                      ${isActive ? 'bg-brand-primary text-white' : 'hover:bg-bg-muted'}
                      ${!sidebarOpen ? 'md:justify-center md:px-0' : ''}
                    `}
                    onClick={() => navigate(item.href)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className={sidebarOpen ? 'block' : 'hidden md:hidden'}>
                      {item.name}
                    </span>
                  </Button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;