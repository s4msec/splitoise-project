interface NavigationItemProps {
    expanded: boolean;
    icon: React.JSX.Element;
    text: string;
    href?: string; // Optional, as the "Logout" item does not have a link
    active?: boolean; // Optional, not always relevant
    deactivated?: boolean; // Optional, based on navbarItems
}

interface NavbarContextType {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    headerNavigation: unknown;
    setHeaderNavigation: React.Dispatch<React.SetStateAction<unknown>>;
}
  
interface NavbarProviderProps {
    children: React.ReactNode;
}

interface NavbarItem {
    icon: React.JSX.Element;
    text: string;
    href: string;
    active: boolean;
    deactivated: boolean;
}
  
interface NavbarItemsProviderProps {
    children: React.ReactNode;
}