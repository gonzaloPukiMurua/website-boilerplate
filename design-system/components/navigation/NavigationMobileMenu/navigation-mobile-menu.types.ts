import { NavigationItem } from "../Navigation/navigation.types";

export interface NavigationMobileMenuProps {
  items: NavigationItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}
