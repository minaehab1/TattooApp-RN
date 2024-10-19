import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  userPoints: number | null;
  loading: boolean;
  error: string | null;
  // Add other properties as needed
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userPoints, setUserPoints] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const value = {
    userPoints,
    loading,
    error,
    // Add other state and functions here
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
