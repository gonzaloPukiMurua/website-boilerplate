import { cn } from "@/design-system/utils/cn";
import { NavItem } from "../NavItem";

import type { NavigationMobileMenuProps } from "./navigation-mobile-menu.types";

export function NavigationMobileMenu({
  items,
  open,
  onItemClick,
  className,
}: NavigationMobileMenuProps) {
  if (!open) return null;

  return (
    <ul
      id="mobile-navigation"
      className={cn(
        "fixed inset-x-0 top-[65px] flex flex-col gap-1 border-t border-border bg-background p-4 md:hidden",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.href}>
          <NavItem
            href={item.href}
            onClick={onItemClick}
            className="block border-b-0 py-3"
          >
            {item.label}
          </NavItem>
        </li>
      ))}
    </ul>
  );
}
