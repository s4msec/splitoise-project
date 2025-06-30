"use client";

import React, { createContext, useContext } from 'react';
import { RiDashboard2Fill } from "react-icons/ri";

const NavbarItemsContext = createContext<NavbarItemsContextType | undefined>(undefined);

export const NavbarItemsProvider: React.FC<NavbarItemsProviderProps> = ({ children }) => {
  const navbarItems: NavbarItemsContextType = [
    { icon: <RiDashboard2Fill size={20} />, text: "Projetos", href: "/projects", active: false, deactivated: false },
  ];

  return (
    <NavbarItemsContext.Provider value={navbarItems}>
      {children}
    </NavbarItemsContext.Provider>
  );
};

// Hook to use the NavbarItemsContext
export const useNavbarItems = (): NavbarItemsContextType => {
  const context = useContext(NavbarItemsContext);
  if (context === undefined) {
    throw new Error('useNavbarItems must be used within a NavbarItemsProvider');
  }
  return context;
};
