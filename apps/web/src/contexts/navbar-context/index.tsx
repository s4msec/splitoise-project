"use client";

import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

const useNavbarContext = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};

const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [headerNavigation, setHeaderNavigation] = useState<unknown>(); // Adjust type if needed

  return (
    <NavbarContext.Provider
      value={{ expanded, setExpanded, headerNavigation, setHeaderNavigation }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarProvider, useNavbarContext };
