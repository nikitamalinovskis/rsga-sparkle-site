import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Upload, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const TestButtons: React.FC = () => {
  const [testEmail, setTestEmail] = useState('');
  const [testing, setTesting] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();

  const handleTestEmail = async () => {
    if (!testEmail) {
      toast({
        title: 'Email Required',
        description: 'Please enter an email address to send test email',
        variant: 'destructive'
      });
      return;
    }

    setTesting(prev => ({ ...prev, email: true }));
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-notification', {
        body: {
          name: 'Test User',
          email: testEmail,
          message: 'This is a test email from the admin panel.',
          language: 'en',
          contactId: 'test-id'
        }
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Test email sent to ${testEmail}`
      });
    } catch (error: any) {
      console.error('Test email failed:', error);
      toast({
        title: 'Test Failed',
        description: error.message || 'Failed to send test email',
        variant: 'destructive'
      });
    } finally {
      setTesting(prev => ({ ...prev, email: false }));
    }
  };

  const handleTestUpload = async () => {
    setTesting(prev => ({ ...prev, upload: true }));
    
    try {
      // Create a test blob (1x1 transparent PNG)
      const testBlob = new Blob([
        new Uint8Array([
          0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
          0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
          0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4, 0x89, 0x00, 0x00, 0x00,
          0x0A, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
          0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00, 0x00, 0x00, 0x00, 0x49,
          0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
        ])
      ], { type: 'image/png' });
      
      const testFileName = `test_upload_${Date.now()}.png`;
      
      // Test upload to storage
      const { data, error: uploadError } = await supabase.storage
        .from('media')
        .upload(`test/${testFileName}`, testBlob);

      if (uploadError) throw uploadError;

      // Test cleanup - delete the test file
      await supabase.storage
        .from('media')
        .remove([`test/${testFileName}`]);

      toast({
        title: 'Success',
        description: 'Storage upload test completed successfully'
      });
    } catch (error: any) {
      console.error('Test upload failed:', error);
      toast({
        title: 'Test Failed',
        description: error.message || 'Storage upload test failed',
        variant: 'destructive'
      });
    } finally {
      setTesting(prev => ({ ...prev, upload: false }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5" />
          Test Services
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="test-email">Test Email Address</Label>
          <div className="flex gap-2">
            <Input
              id="test-email"
              type="email"
              placeholder="admin@example.com"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
            />
            <Button 
              onClick={handleTestEmail}
              disabled={testing.email}
              size="sm"
            >
              <Mail className="h-4 w-4 mr-1" />
              {testing.email ? 'Sending...' : 'Test Email'}
            </Button>
          </div>
        </div>
        
        <Button 
          onClick={handleTestUpload}
          disabled={testing.upload}
          variant="outline"
          className="w-full"
        >
          <Upload className="h-4 w-4 mr-2" />
          {testing.upload ? 'Testing...' : 'Test Upload'}
        </Button>
      </CardContent>
    </Card>
  );
};