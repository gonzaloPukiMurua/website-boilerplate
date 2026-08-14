import { NavigationItem } from "../Navigation/navigation.types";

export interface NavigationMobileMenuProps {
  items: NavigationItem[];
  open: boolean;
  onItemClick?: () => void;
  className?: string;
}
