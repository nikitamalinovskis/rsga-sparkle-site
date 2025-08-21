import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Eye, 
  Mail, 
  Phone,
  Building,
  Calendar,
  MessageSquare,
  Filter,
  Download,
  ExternalLink,
  User,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source_page?: string;
  language: string;
  consent: boolean;
  status: 'new' | 'in_progress' | 'resolved';
  notes?: string;
  created_at: string;
  updated_at: string;
}

const AdminContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const languages = [
    { code: 'all', name: 'All Languages' },
    { code: 'lv', name: 'Latvian' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' }
  ];

  const statuses = [
    { code: 'all', name: 'All Status' },
    { code: 'new', name: 'New' },
    { code: 'in_progress', name: 'In Progress' },
    { code: 'resolved', name: 'Resolved' }
  ];

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, searchQuery, selectedLanguage, selectedStatus]);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts((data || []) as Contact[]);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch contacts',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterContacts = () => {
    let filtered = contacts;

    if (searchQuery) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(contact => contact.language === selectedLanguage);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(contact => contact.status === selectedStatus);
    }

    setFilteredContacts(filtered);
  };

  const handleUpdateStatus = async (contactId: string, newStatus: Contact['status']) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status: newStatus })
        .eq('id', contactId);

      if (error) throw error;

      await fetchContacts();
      toast({
        title: 'Success',
        description: 'Contact status updated'
      });
    } catch (error) {
      console.error('Error updating contact status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update contact status',
        variant: 'destructive'
      });
    }
  };

  const handleUpdateNotes = async (contactId: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ notes })
        .eq('id', contactId);

      if (error) throw error;

      await fetchContacts();
      toast({
        title: 'Success',
        description: 'Notes updated'
      });
    } catch (error) {
      console.error('Error updating notes:', error);
      toast({
        title: 'Error',
        description: 'Failed to update notes',
        variant: 'destructive'
      });
    }
  };

  const handleBulkStatusUpdate = async (status: Contact['status']) => {
    const selectedIds = filteredContacts
      .filter(contact => contact.status === 'new')
      .map(contact => contact.id);

    if (selectedIds.length === 0) {
      toast({
        title: 'No contacts to update',
        description: 'No new contacts found to update',
        variant: 'destructive'
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status })
        .in('id', selectedIds);

      if (error) throw error;

      await fetchContacts();
      toast({
        title: 'Success',
        description: `Updated ${selectedIds.length} contacts to ${status}`
      });
    } catch (error) {
      console.error('Error updating contacts:', error);
      toast({
        title: 'Error',
        description: 'Failed to update contacts',
        variant: 'destructive'
      });
    }
  };

  const handleExportContacts = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Company', 'Message', 'Language', 'Status', 'Created At'].join(','),
      ...filteredContacts.map(contact => [
        contact.name,
        contact.email,
        contact.phone || '',
        contact.company || '',
        `"${contact.message.replace(/"/g, '""')}"`,
        contact.language,
        contact.status,
        new Date(contact.created_at).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rsga-contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: 'Export Complete',
      description: 'Contacts exported to CSV file'
    });
  };

  const openContactDialog = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
  };

  const getStatusBadge = (status: string): "default" | "secondary" | "outline" | "destructive" => {
    const variants: { [key: string]: "default" | "secondary" | "outline" | "destructive" } = {
      new: 'destructive',
      in_progress: 'outline',
      resolved: 'default'
    };
    return variants[status] || 'secondary';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <AlertCircle className="h-4 w-4" />;
      case 'in_progress': return <Clock className="h-4 w-4" />;
      case 'resolved': return <CheckCircle className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
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

  const contactsByLanguage = {
    lv: filteredContacts.filter(c => c.language === 'lv'),
    en: filteredContacts.filter(c => c.language === 'en'),
    ru: filteredContacts.filter(c => c.language === 'ru')
  };

  const stats = {
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    inProgress: contacts.filter(c => c.status === 'in_progress').length,
    resolved: contacts.filter(c => c.status === 'resolved').length
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-24 bg-bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fg-primary">Contacts</h1>
          <p className="text-fg-muted">Manage contact form submissions and inquiries</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleExportContacts}
            disabled={filteredContacts.length === 0}
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button 
            onClick={() => handleBulkStatusUpdate('resolved')}
            disabled={contacts.filter(c => c.status === 'new').length === 0}
          >
            Mark All as Resolved
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-fg-muted">Total Contacts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <div>
                <p className="text-2xl font-bold">{stats.new}</p>
                <p className="text-xs text-fg-muted">New</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{stats.inProgress}</p>
                <p className="text-xs text-fg-muted">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.resolved}</p>
                <p className="text-xs text-fg-muted">Resolved</p>
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
                  placeholder="Search contacts..."
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
              {filteredContacts.length} contacts
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Contacts by Language Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({filteredContacts.length})</TabsTrigger>
          <TabsTrigger value="lv">LV ({contactsByLanguage.lv.length})</TabsTrigger>
          <TabsTrigger value="en">EN ({contactsByLanguage.en.length})</TabsTrigger>
          <TabsTrigger value="ru">RU ({contactsByLanguage.ru.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ContactsList 
            contacts={filteredContacts} 
            onViewContact={openContactDialog}
            onUpdateStatus={handleUpdateStatus}
          />
        </TabsContent>
        
        <TabsContent value="lv">
          <ContactsList 
            contacts={contactsByLanguage.lv} 
            onViewContact={openContactDialog}
            onUpdateStatus={handleUpdateStatus}
          />
        </TabsContent>
        
        <TabsContent value="en">
          <ContactsList 
            contacts={contactsByLanguage.en} 
            onViewContact={openContactDialog}
            onUpdateStatus={handleUpdateStatus}
          />
        </TabsContent>
        
        <TabsContent value="ru">
          <ContactsList 
            contacts={contactsByLanguage.ru} 
            onViewContact={openContactDialog}
            onUpdateStatus={handleUpdateStatus}
          />
        </TabsContent>
      </Tabs>

      {/* Contact Detail Dialog */}
      {selectedContact && (
        <ContactDetailDialog
          contact={selectedContact}
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
            setSelectedContact(null);
          }}
          onUpdateStatus={handleUpdateStatus}
          onUpdateNotes={handleUpdateNotes}
        />
      )}
    </div>
  );
};

interface ContactsListProps {
  contacts: Contact[];
  onViewContact: (contact: Contact) => void;
  onUpdateStatus: (contactId: string, status: Contact['status']) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({ contacts, onViewContact, onUpdateStatus }) => {
  const getStatusBadge = (status: string): "default" | "secondary" | "outline" | "destructive" => {
    const variants: { [key: string]: "default" | "secondary" | "outline" | "destructive" } = {
      new: 'destructive',
      in_progress: 'outline',
      resolved: 'default'
    };
    return variants[status] || 'secondary';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <AlertCircle className="h-4 w-4" />;
      case 'in_progress': return <Clock className="h-4 w-4" />;
      case 'resolved': return <CheckCircle className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
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

  if (contacts.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <Mail className="h-12 w-12 text-fg-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-fg-primary mb-2">No contacts found</h3>
          <p className="text-fg-muted">Contact submissions will appear here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <Card key={contact.id} className="hover-lift cursor-pointer" onClick={() => onViewContact(contact)}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(contact.status)}
                    <h3 className="font-semibold text-fg-primary">{contact.name}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {contact.language.toUpperCase()}
                  </Badge>
                  <Badge variant={getStatusBadge(contact.status)}>
                    {contact.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-fg-muted mb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                  {contact.company && (
                    <div className="flex items-center gap-2">
                      <Building className="h-3 w-3" />
                      <span>{contact.company}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(contact.created_at)}</span>
                  </div>
                </div>
                
                <p className="text-sm text-fg-secondary line-clamp-2 mb-2">
                  {contact.message}
                </p>
                
                {contact.source_page && (
                  <div className="flex items-center gap-2 text-xs text-fg-muted">
                    <ExternalLink className="h-3 w-3" />
                    <span>From: {contact.source_page}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 ml-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewContact(contact);
                  }}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                
                <select
                  value={contact.status}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    onUpdateStatus(contact.id, e.target.value as Contact['status']);
                  }}
                  className="text-xs px-2 py-1 border border-border-default rounded bg-white"
                >
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

interface ContactDetailDialogProps {
  contact: Contact;
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (contactId: string, status: Contact['status']) => void;
  onUpdateNotes: (contactId: string, notes: string) => void;
}

const ContactDetailDialog: React.FC<ContactDetailDialogProps> = ({
  contact,
  isOpen,
  onClose,
  onUpdateStatus,
  onUpdateNotes
}) => {
  const [notes, setNotes] = useState(contact.notes || '');
  const [status, setStatus] = useState(contact.status);

  const handleSaveNotes = () => {
    onUpdateNotes(contact.id, notes);
  };

  const handleStatusChange = (newStatus: Contact['status']) => {
    setStatus(newStatus);
    onUpdateStatus(contact.id, newStatus);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contact Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="font-medium">Name</Label>
              <p className="text-fg-primary mt-1">{contact.name}</p>
            </div>
            
            <div>
              <Label className="font-medium">Status</Label>
              <div className="mt-1">
                <select
                  value={status}
                  onChange={(e) => handleStatusChange(e.target.value as Contact['status'])}
                  className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
                >
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
            
            <div>
              <Label className="font-medium">Email</Label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-fg-primary">{contact.email}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open(`mailto:${contact.email}`)}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {contact.phone && (
              <div>
                <Label className="font-medium">Phone</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-fg-primary">{contact.phone}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(`tel:${contact.phone}`)}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {contact.company && (
              <div>
                <Label className="font-medium">Company</Label>
                <p className="text-fg-primary mt-1">{contact.company}</p>
              </div>
            )}
            
            <div>
              <Label className="font-medium">Language</Label>
              <p className="text-fg-primary mt-1">{contact.language.toUpperCase()}</p>
            </div>
            
            <div>
              <Label className="font-medium">Submitted</Label>
              <p className="text-fg-primary mt-1">{formatDate(contact.created_at)}</p>
            </div>
            
            {contact.source_page && (
              <div className="col-span-2">
                <Label className="font-medium">Source Page</Label>
                <p className="text-fg-primary mt-1">{contact.source_page}</p>
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <Label className="font-medium">Message</Label>
            <div className="mt-2 p-4 bg-bg-subtle rounded-lg">
              <p className="text-fg-primary whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label className="font-medium">Internal Notes</Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your notes about this contact..."
              className="mt-2"
              rows={4}
            />
            <div className="flex justify-end mt-2">
              <Button onClick={handleSaveNotes} size="sm">
                Save Notes
              </Button>
            </div>
          </div>

          {/* Consent */}
          {contact.consent && (
            <div className="flex items-center gap-2 text-sm text-fg-muted">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>User has consented to data processing</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminContacts;