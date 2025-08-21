import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Upload,
  Search,
  Eye,
  Edit,
  Trash2,
  Download,
  Copy,
  Image,
  FileText,
  Video,
  FolderPlus,
  GridIcon,
  ListIcon,
  Filter,
  X
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface MediaFile {
  id: string;
  filename: string;
  original_name: string;
  file_path: string;
  file_size: number;
  mime_type: string;
  file_type: 'image' | 'video' | 'document';
  folder: string;
  title?: string;
  description?: string;
  alt_text_lv?: string;
  alt_text_en?: string;
  alt_text_ru?: string;
  thumbnail_path?: string;
  created_at: string;
  updated_at: string;
}

const AdminMedia: React.FC = () => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('root');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const folders = ['root', 'images', 'documents', 'videos', 'logos', 'blog'];
  const fileTypes = [
    { value: 'all', label: 'All Files' },
    { value: 'image', label: 'Images' },
    { value: 'video', label: 'Videos' },
    { value: 'document', label: 'Documents' }
  ];

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    filterFiles();
  }, [files, searchQuery, selectedFolder, selectedType]);

  const fetchFiles = async () => {
    try {
      const { data, error } = await supabase
        .from('media_library')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFiles((data || []) as MediaFile[]);
    } catch (error) {
      console.error('Error fetching files:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch media files',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterFiles = () => {
    let filtered = files;

    if (searchQuery) {
      filtered = filtered.filter(file =>
        file.original_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFolder !== 'root') {
      filtered = filtered.filter(file => file.folder === selectedFolder);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(file => file.file_type === selectedType);
    }

    setFilteredFiles(filtered);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = Array.from(event.target.files || []);
    
    if (uploadFiles.length === 0) return;

    for (const file of uploadFiles) {
      try {
        // Generate unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `media/${fileName}`;

        // Determine file type
        let fileType: 'image' | 'video' | 'document' = 'document';
        if (file.type.startsWith('image/')) fileType = 'image';
        else if (file.type.startsWith('video/')) fileType = 'video';

        // Start upload progress
        setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));

        // Upload to Supabase Storage (you'll need to set up storage buckets)
        // For now, we'll simulate upload and store metadata
        const mediaData = {
          filename: fileName,
          original_name: file.name,
          file_path: filePath,
          file_size: file.size,
          mime_type: file.type,
          file_type: fileType,
          folder: selectedFolder
        };

        const { error } = await supabase
          .from('media_library')
          .insert([mediaData]);

        if (error) throw error;

        // Update progress
        setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
        
        toast({
          title: 'Success',
          description: `${file.name} uploaded successfully`
        });

      } catch (error) {
        console.error('Error uploading file:', error);
        toast({
          title: 'Error',
          description: `Failed to upload ${file.name}`,
          variant: 'destructive'
        });
      } finally {
        // Remove progress after delay
        setTimeout(() => {
          setUploadProgress(prev => {
            const newProgress = { ...prev };
            delete newProgress[file.name];
            return newProgress;
          });
        }, 2000);
      }
    }

    await fetchFiles();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteFile = async (fileId: string, fileName: string) => {
    if (!confirm(`Are you sure you want to delete "${fileName}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('media_library')
        .delete()
        .eq('id', fileId);

      if (error) throw error;

      await fetchFiles();
      toast({
        title: 'Success',
        description: 'File deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting file:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete file',
        variant: 'destructive'
      });
    }
  };

  const handleUpdateFile = async (fileId: string, updates: Partial<MediaFile>) => {
    try {
      const { error } = await supabase
        .from('media_library')
        .update(updates)
        .eq('id', fileId);

      if (error) throw error;

      await fetchFiles();
      toast({
        title: 'Success',
        description: 'File updated successfully'
      });
    } catch (error) {
      console.error('Error updating file:', error);
      toast({
        title: 'Error',
        description: 'Failed to update file',
        variant: 'destructive'
      });
    }
  };

  const handleCopyUrl = (filePath: string) => {
    // In a real implementation, this would be the full Supabase Storage URL
    const url = `${window.location.origin}/media/${filePath}`;
    navigator.clipboard.writeText(url);
    toast({
      title: 'URL Copied',
      description: 'File URL copied to clipboard'
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType: string, mimeType: string) => {
    if (fileType === 'image') return <Image className="h-5 w-5 text-green-600" />;
    if (fileType === 'video') return <Video className="h-5 w-5 text-blue-600" />;
    return <FileText className="h-5 w-5 text-gray-600" />;
  };

  const openFileDialog = (file: MediaFile) => {
    setSelectedFile(file);
    setIsDialogOpen(true);
  };

  const stats = {
    total: files.length,
    images: files.filter(f => f.file_type === 'image').length,
    videos: files.filter(f => f.file_type === 'video').length,
    documents: files.filter(f => f.file_type === 'document').length,
    totalSize: files.reduce((sum, f) => sum + f.file_size, 0)
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Media Library</h1>
        <div className="animate-pulse space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-bg-muted rounded"></div>
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
          <h1 className="text-3xl font-bold text-fg-primary">Media Library</h1>
          <p className="text-fg-muted">Manage images, videos, and documents</p>
        </div>
        <Button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-brand-primary hover:bg-brand-primary-strong"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,.pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-fg-muted">Total Files</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Image className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.images}</p>
                <p className="text-xs text-fg-muted">Images</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.videos}</p>
                <p className="text-xs text-fg-muted">Videos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-gray-600" />
              <div>
                <p className="text-2xl font-bold">{stats.documents}</p>
                <p className="text-xs text-fg-muted">Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Upload className="h-4 w-4 text-purple-600" />
              <div>
                <p className="text-lg font-bold">{formatFileSize(stats.totalSize)}</p>
                <p className="text-xs text-fg-muted">Total Size</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploading Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(uploadProgress).map(([fileName, progress]) => (
                <div key={fileName} className="flex items-center gap-3">
                  <span className="text-sm flex-1">{fileName}</span>
                  <div className="w-32 bg-bg-muted rounded-full h-2">
                    <div 
                      className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-fg-muted w-12">{progress}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters and Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-muted h-4 w-4" />
                <Input
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
              
              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
              >
                <option value="root">All Folders</option>
                {folders.slice(1).map(folder => (
                  <option key={folder} value={folder}>{folder}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-border-default rounded-md bg-white text-fg-primary"
              >
                {fileTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="whitespace-nowrap">
                {filteredFiles.length} files
              </Badge>
              
              <div className="flex border border-border-default rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <ListIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Files Display */}
      {viewMode === 'grid' ? (
        <MediaGrid 
          files={filteredFiles} 
          onFileClick={openFileDialog}
          onDelete={handleDeleteFile}
          onCopyUrl={handleCopyUrl}
        />
      ) : (
        <MediaList 
          files={filteredFiles} 
          onFileClick={openFileDialog}
          onDelete={handleDeleteFile}
          onCopyUrl={handleCopyUrl}
        />
      )}

      {/* File Detail Dialog */}
      {selectedFile && (
        <FileDetailDialog
          file={selectedFile}
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
            setSelectedFile(null);
          }}
          onUpdate={handleUpdateFile}
        />
      )}
    </div>
  );
};

interface MediaGridProps {
  files: MediaFile[];
  onFileClick: (file: MediaFile) => void;
  onDelete: (fileId: string, fileName: string) => void;
  onCopyUrl: (filePath: string) => void;
}

const MediaGrid: React.FC<MediaGridProps> = ({ files, onFileClick, onDelete, onCopyUrl }) => {
  const getFileIcon = (fileType: string) => {
    if (fileType === 'image') return <Image className="h-8 w-8 text-green-600" />;
    if (fileType === 'video') return <Video className="h-8 w-8 text-blue-600" />;
    return <FileText className="h-8 w-8 text-gray-600" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (files.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <Upload className="h-12 w-12 text-fg-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-fg-primary mb-2">No files found</h3>
          <p className="text-fg-muted">Upload your first media files to get started.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {files.map((file) => (
        <Card key={file.id} className="hover-lift cursor-pointer group" onClick={() => onFileClick(file)}>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">
                {file.file_type === 'image' && file.thumbnail_path ? (
                  <img 
                    src={file.thumbnail_path} 
                    alt={file.original_name}
                    className="w-16 h-16 object-cover rounded"
                  />
                ) : (
                  getFileIcon(file.file_type)
                )}
              </div>
              
              <h4 className="font-medium text-fg-primary text-sm truncate w-full mb-1">
                {file.title || file.original_name}
              </h4>
              
              <p className="text-xs text-fg-muted">
                {formatFileSize(file.file_size)}
              </p>
              
              <Badge variant="outline" className="text-xs mt-2">
                {file.folder}
              </Badge>
              
              <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCopyUrl(file.file_path);
                  }}
                >
                  <Copy className="h-3 w-3" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(file.id, file.original_name);
                  }}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

interface MediaListProps {
  files: MediaFile[];
  onFileClick: (file: MediaFile) => void;
  onDelete: (fileId: string, fileName: string) => void;
  onCopyUrl: (filePath: string) => void;
}

const MediaList: React.FC<MediaListProps> = ({ files, onFileClick, onDelete, onCopyUrl }) => {
  const getFileIcon = (fileType: string) => {
    if (fileType === 'image') return <Image className="h-5 w-5 text-green-600" />;
    if (fileType === 'video') return <Video className="h-5 w-5 text-blue-600" />;
    return <FileText className="h-5 w-5 text-gray-600" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (files.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <Upload className="h-12 w-12 text-fg-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-fg-primary mb-2">No files found</h3>
          <p className="text-fg-muted">Upload your first media files to get started.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y divide-border-subtle">
          {files.map((file) => (
            <div key={file.id} className="flex items-center justify-between p-4 hover:bg-bg-subtle cursor-pointer" onClick={() => onFileClick(file)}>
              <div className="flex items-center gap-4 flex-1">
                {getFileIcon(file.file_type)}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-fg-primary truncate">
                    {file.title || file.original_name}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-fg-muted mt-1">
                    <span>{formatFileSize(file.file_size)}</span>
                    <Badge variant="outline" className="text-xs">
                      {file.folder}
                    </Badge>
                    <span>{formatDate(file.created_at)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCopyUrl(file.file_path);
                  }}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(file.id, file.original_name);
                  }}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface FileDetailDialogProps {
  file: MediaFile;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (fileId: string, updates: Partial<MediaFile>) => void;
}

const FileDetailDialog: React.FC<FileDetailDialogProps> = ({ file, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: file.title || '',
    description: file.description || '',
    alt_text_lv: file.alt_text_lv || '',
    alt_text_en: file.alt_text_en || '',
    alt_text_ru: file.alt_text_ru || '',
    folder: file.folder
  });

  const folders = ['root', 'images', 'documents', 'videos', 'logos', 'blog'];

  const handleSave = () => {
    onUpdate(file.id, formData);
    onClose();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>File Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* File Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="font-medium">Filename</Label>
              <p className="text-fg-primary mt-1">{file.original_name}</p>
            </div>
            
            <div>
              <Label className="font-medium">File Size</Label>
              <p className="text-fg-primary mt-1">{formatFileSize(file.file_size)}</p>
            </div>
            
            <div>
              <Label className="font-medium">Type</Label>
              <p className="text-fg-primary mt-1">{file.mime_type}</p>
            </div>
            
            <div>
              <Label className="font-medium">Created</Label>
              <p className="text-fg-primary mt-1">
                {new Date(file.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Editable Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="File title"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="File description"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="folder">Folder</Label>
              <select
                id="folder"
                value={formData.folder}
                onChange={(e) => setFormData(prev => ({ ...prev, folder: e.target.value }))}
                className="w-full px-3 py-2 border border-border-default rounded-md bg-white"
              >
                {folders.map(folder => (
                  <option key={folder} value={folder}>{folder}</option>
                ))}
              </select>
            </div>

            {/* Alt Text for Images */}
            {file.file_type === 'image' && (
              <div className="border-t pt-4">
                <h4 className="font-medium mb-4">Alt Text (for accessibility)</h4>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="alt_text_lv">Latvian Alt Text</Label>
                    <Input
                      id="alt_text_lv"
                      value={formData.alt_text_lv}
                      onChange={(e) => setFormData(prev => ({ ...prev, alt_text_lv: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="alt_text_en">English Alt Text</Label>
                    <Input
                      id="alt_text_en"
                      value={formData.alt_text_en}
                      onChange={(e) => setFormData(prev => ({ ...prev, alt_text_en: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="alt_text_ru">Russian Alt Text</Label>
                    <Input
                      id="alt_text_ru"
                      value={formData.alt_text_ru}
                      onChange={(e) => setFormData(prev => ({ ...prev, alt_text_ru: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-brand-primary hover:bg-brand-primary-strong">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminMedia;