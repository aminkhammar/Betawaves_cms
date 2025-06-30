import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // 👈 track context readiness

  useEffect(() => {
    const session = localStorage.getItem('admin_session');
     console.log("🔍 Checking session on load:", session);
    if (session === 'logged_in') {
      setIsAdminLoggedIn(true);
    }
    setLoading(false); // ✅ now context is ready
  }, []);

  

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch('http://localhost:3000/api/admins/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) return false;

      localStorage.setItem('admin_session', 'logged_in');
      setIsAdminLoggedIn(true);
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('admin_session');
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, login, logout, loading }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
