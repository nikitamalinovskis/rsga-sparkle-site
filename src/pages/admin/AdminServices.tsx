import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Plus, 
  Search, 
  Edit, 
  Eye, 
  Trash2, 
  Settings,
  ArrowUp,
  ArrowDown,
  Star,
  Package
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Service {
  id: string;
  name: string;
  slug: string;
  language: string;
  short_description?: string;
  description?: string;
  service_type: 'core' | 'additional';
  icon?: string;
  header_image?: string;
  gallery?: string[];
  benefits?: any;
  cta_label?: string;
  cta_url?: string;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  ordering_index: number;
  status: string;
  created_at: string;
  updated_at: string;
}

const AdminServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { toast } = useToast();

  const languages = [
    { code: 'all', name: 'All Languages' },
    { code: 'lv', name: 'Latvian' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' }
  ];

  const serviceTypes = [
    { code: 'all', name: 'All Types' },
    { code: 'core', name: 'Core Services' },
    { code: 'additional', name: 'Additional Services' }
  ];

  const iconOptions = [
    'Recycle', 'Leaf', 'Droplets', 'Truck', 'Building', 'Wrench'
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    filterServices();
  }, [services, searchQuery, selectedLanguage, selectedType]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('ordering_index', { ascending: true });

      if (error) throw error;
      setServices((data || []) as Service[]);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch services',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterServices = () => {
    let filtered = services;

    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(service => service.language === selectedLanguage);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(service => service.service_type === selectedType);
    }

    setFilteredServices(filtered);
  };

  const handleSaveService = async (formData: any) => {
    try {
      const serviceData = {
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        language: formData.language,
        short_description: formData.short_description,
        description: formData.description,
        service_type: formData.service_type,
        icon: formData.icon,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        ordering_index: formData.ordering_index || 0,
        status: formData.status || 'published'
      };

      let error;
      if (editingService) {
        const result = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);
        error = result.error;
      } else {
        const result = await supabase
          .from('services')
          .insert([serviceData]);
        error = result.error;
      }

      if (error) throw error;

      await fetchServices();
      setIsDialogOpen(false);
      setEditingService(null);
      
      toast({
        title: 'Success',
        description: editingService ? 'Service updated successfully' : 'Service created successfully'
      });
    } catch (error) {
      console.error('Error saving service:', error);
      toast({
        title: 'Error',
        description: 'Failed to save service',
        variant: 'destructive'
      });
    }
  };

  const handleDeleteService = async (serviceId: string, serviceName: string) => {
    if (!confirm(`Are you sure you want to delete "${serviceName}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', serviceId);

      if (error) throw error;

      await fetchServices();
      toast({
        title: 'Success',
        description: 'Service deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting service:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete service',
        variant: 'destructive'
      });
    }
  };

  const handleReorderService = async (serviceId: string, direction: 'up' | 'down') => {
    const currentService = services.find(s => s.id === serviceId);
    if (!currentService) return;

    const sameLanguageServices = services
      .filter(s => s.language === currentService.language)
      .sort((a, b) => a.ordering_index - b.ordering_index);

    const currentIndex = sameLanguageServices.findIndex(s => s.id === serviceId);
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0 || newIndex >= sameLanguageServices.length) return;

    const targetService = sameLanguageServices[newIndex];

    try {
      const updates = [
        supabase.from('services').update({ ordering_index: targetService.ordering_index }).eq('id', currentService.id),
        supabase.from('services').update({ ordering_index: currentService.ordering_index }).eq('id', targetService.id)
      ];

      await Promise.all(updates);
      await fetchServices();
      
      toast({
        title: 'Success',
        description: 'Service order updated'
      });
    } catch (error) {
      console.error('Error reordering service:', error);
      toast({
        title: 'Error',
        description: 'Failed to reorder service',
        variant: 'destructive'
      });
    }
  };

  const openEditDialog = (service: Service) => {
    setEditingService(service);
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setEditingService(null);
    setIsDialogOpen(true);
  };

  const getTypeBadge = (type: string) => {
    return type === 'core' ? 'default' : 'secondary';
  };

  const servicesByLanguage = {
    lv: filteredServices.filter(s => s.language === 'lv'),
    en: filteredServices.filter(s => s.language === 'en'),
    ru: filteredServices.filter(s => s.language === 'ru')
  };

  const stats = {
    total: services.length,
    core: services.filter(s => s.service_type === 'core').length,
    additional: services.filter(s => s.service_type === 'additional').length,
    published: services.filter(s => s.status === 'published').length
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Services</h1>
          <Button disabled>
            <Plus className="h-4 w-4 mr-2" />
            New Service
          </Button>
        </div>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fg-primary">Services</h1>
          <p className="text-fg-muted">Manage your services across all languages</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-brand-primary hover:bg-brand-primary-strong">
          <Plus className="h-4 w-4 mr-2" />
          New Service
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-fg-muted">Total Services</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.core}</p>
                <p className="text-xs text-fg-muted">Core Services</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{stats.additional}</p>
                <p className="text-xs text-fg-muted">Additional</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{stats.published}</p>
                <p className="text-xs text-fg-muted">Published</p>
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
                  placeholder="Search services..."
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
              >
                {serviceTypes.map(type => (
                  <option key={type.code} value={type.code}>{type.name}</option>
                ))}
              </select>
            </div>
            
            <Badge variant="outline" className="whitespace-nowrap">
              {filteredServices.length} services
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Services by Language Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({filteredServices.length})</TabsTrigger>
          <TabsTrigger value="lv">LV ({servicesByLanguage.lv.length})</TabsTrigger>
          <TabsTrigger value="en">EN ({servicesByLanguage.en.length})</TabsTrigger>
          <TabsTrigger value="ru">RU ({servicesByLanguage.ru.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ServicesList 
            services={filteredServices} 
            onEdit={openEditDialog}
            onDelete={handleDeleteService}
            onReorder={handleReorderService}
          />
        </TabsContent>
        
        <TabsContent value="lv">
          <ServicesList 
            services={servicesByLanguage.lv} 
            onEdit={openEditDialog}
            onDelete={handleDeleteService}
            onReorder={handleReorderService}
          />
        </TabsContent>
        
        <TabsContent value="en">
          <ServicesList 
            services={servicesByLanguage.en} 
            onEdit={openEditDialog}
            onDelete={handleDeleteService}
            onReorder={handleReorderService}
          />
        </TabsContent>
        
        <TabsContent value="ru">
          <ServicesList 
            services={servicesByLanguage.ru} 
            onEdit={openEditDialog}
            onDelete={handleDeleteService}
            onReorder={handleReorderService}
          />
        </TabsContent>
      </Tabs>

      {/* Service Form Dialog */}
      <ServiceFormDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setEditingService(null);
        }}
        onSave={handleSaveService}
        service={editingService}
        iconOptions={iconOptions}
      />
    </div>
  );
};

interface ServicesListProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (serviceId: string, serviceName: string) => void;
  onReorder: (serviceId: string, direction: 'up' | 'down') => void;
}

const ServicesList: React.FC<ServicesListProps> = ({ services, onEdit, onDelete, onReorder }) => {
  const getTypeBadge = (type: string): "default" | "secondary" | "outline" | "destructive" => {
    return type === 'core' ? 'default' : 'secondary';
  };

  if (services.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <Settings className="h-12 w-12 text-fg-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-fg-primary mb-2">No services found</h3>
          <p className="text-fg-muted mb-4">Create your first service to get started.</p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Service
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.id} className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-fg-primary">{service.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {service.language.toUpperCase()}
                  </Badge>
                  <Badge variant={getTypeBadge(service.service_type)}>
                    {service.service_type}
                  </Badge>
                  {service.icon && (
                    <Badge variant="outline" className="text-xs">
                      {service.icon}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-fg-muted mb-2">
                  <span>/{service.slug}</span>
                  <span>Order: {service.ordering_index}</span>
                </div>
                
                {service.short_description && (
                  <p className="text-sm text-fg-secondary mt-2 line-clamp-2">
                    {service.short_description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onReorder(service.id, 'up')}
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onReorder(service.id, 'down')}
                >
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onEdit(service)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onDelete(service.id, service.name)}
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

interface ServiceFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  service: Service | null;
  iconOptions: string[];
}

const ServiceFormDialog: React.FC<ServiceFormDialogProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  service,
  iconOptions 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    language: 'lv',
    short_description: '',
    description: '',
    service_type: 'core',
    icon: '',
    meta_title: '',
    meta_description: '',
    ordering_index: 0,
    status: 'published'
  });

  useEffect(() => {
    if (service) {
      setFormData({
        name: service.name || '',
        slug: service.slug || '',
        language: service.language || 'lv',
        short_description: service.short_description || '',
        description: service.description || '',
        service_type: service.service_type || 'core',
        icon: service.icon || '',
        meta_title: service.meta_title || '',
        meta_description: service.meta_description || '',
        ordering_index: service.ordering_index || 0,
        status: service.status || 'published'
      });
    } else {
      setFormData({
        name: '',
        slug: '',
        language: 'lv',
        short_description: '',
        description: '',
        service_type: 'core',
        icon: '',
        meta_title: '',
        meta_description: '',
        ordering_index: 0,
        status: 'published'
      });
    }
  }, [service, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {service ? 'Edit Service' : 'Create New Service'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Service Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="language">Language *</Label>
              <select
                id="language"
                value={formData.language}
                onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
                className="w-full px-3 py-2 border border-border-default rounded-md bg-white"
                required
              >
                <option value="lv">Latvian</option>
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="auto-generated-from-name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service_type">Service Type *</Label>
              <select
                id="service_type"
                value={formData.service_type}
                onChange={(e) => setFormData(prev => ({ ...prev, service_type: e.target.value }))}
                className="w-full px-3 py-2 border border-border-default rounded-md bg-white"
                required
              >
                <option value="core">Core Service</option>
                <option value="additional">Additional Service</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="short_description">Short Description</Label>
            <Textarea
              id="short_description"
              value={formData.short_description}
              onChange={(e) => setFormData(prev => ({ ...prev, short_description: e.target.value }))}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Full Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="icon">Icon</Label>
              <select
                id="icon"
                value={formData.icon}
                onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                className="w-full px-3 py-2 border border-border-default rounded-md bg-white"
              >
                <option value="">Select Icon</option>
                {iconOptions.map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ordering_index">Display Order</Label>
              <Input
                id="ordering_index"
                type="number"
                value={formData.ordering_index}
                onChange={(e) => setFormData(prev => ({ ...prev, ordering_index: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>

          {/* SEO Section */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-4">SEO Settings</h4>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                  rows={2}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-brand-primary hover:bg-brand-primary-strong">
              {service ? 'Update Service' : 'Create Service'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminServices;