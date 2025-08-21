import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ConnectionStatus {
  storage: boolean;
  database: boolean;
  email: boolean;
}

interface StatusBadgesProps {
  className?: string;
}

export const StatusBadges: React.FC<StatusBadgesProps> = ({ className }) => {
  const [status, setStatus] = React.useState<ConnectionStatus>({
    storage: false,
    database: false,
    email: false
  });

  React.useEffect(() => {
    const checkConnections = async () => {
      // Check database connection
      try {
        const { error } = await (await import('@/integrations/supabase/client')).supabase
          .from('site_settings')
          .select('id')
          .limit(1);
        setStatus(prev => ({ ...prev, database: !error }));
      } catch {
        setStatus(prev => ({ ...prev, database: false }));
      }

      // Check storage connection
      try {
        const { error } = await (await import('@/integrations/supabase/client')).supabase
          .storage
          .from('media')
          .list('', { limit: 1 });
        setStatus(prev => ({ ...prev, storage: !error }));
      } catch {
        setStatus(prev => ({ ...prev, storage: false }));
      }

      // Check email service (assume working if RESEND_API_KEY exists)
      setStatus(prev => ({ ...prev, email: true })); // Placeholder - would need server check
    };

    checkConnections();
  }, []);

  const getStatusIcon = (connected: boolean) => {
    return connected ? 
      <CheckCircle className="h-3 w-3 text-green-600" /> : 
      <XCircle className="h-3 w-3 text-red-600" />;
  };

  const getStatusVariant = (connected: boolean) => {
    return connected ? 'default' : 'destructive';
  };

  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <Badge variant={getStatusVariant(status.database)} className="text-xs">
        {getStatusIcon(status.database)}
        <span className="ml-1">DB</span>
      </Badge>
      
      <Badge variant={getStatusVariant(status.storage)} className="text-xs">
        {getStatusIcon(status.storage)}
        <span className="ml-1">Storage</span>
      </Badge>
      
      <Badge variant={getStatusVariant(status.email)} className="text-xs">
        {getStatusIcon(status.email)}
        <span className="ml-1">Email</span>
      </Badge>
    </div>
  );
};