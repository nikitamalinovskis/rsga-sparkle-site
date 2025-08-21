import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import AdminDashboard from './AdminDashboard';
import AdminPages from './AdminPages';
import AdminBlog from './AdminBlog';

// Placeholder components for other admin sections
const AdminServices = () => <div className="p-6"><h1 className="text-2xl font-bold">Services Management (Coming Soon)</h1></div>;
const AdminContacts = () => <div className="p-6"><h1 className="text-2xl font-bold">Contacts Management (Coming Soon)</h1></div>;
const AdminAnalytics = () => <div className="p-6"><h1 className="text-2xl font-bold">Analytics Dashboard (Coming Soon)</h1></div>;
const AdminMedia = () => <div className="p-6"><h1 className="text-2xl font-bold">Media Library (Coming Soon)</h1></div>;
const AdminSettings = () => <div className="p-6"><h1 className="text-2xl font-bold">Site Settings (Coming Soon)</h1></div>;

const AdminApp: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (token: string) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-subtle flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="pages" element={<AdminPages />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="contacts" element={<AdminContacts />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="media" element={<AdminMedia />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminApp;