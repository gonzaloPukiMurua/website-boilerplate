import { cn } from "@/design-system/utils/cn";

import { NavItem } from "../NavItem";
import { NavigationProps } from "./navigation.types";

export function Navigation({
  items,
  className,
}: NavigationProps) {
  return (
    <nav
      aria-label="Primary"
      className={className}
    >
      <ul
        className={cn(
          "flex items-center gap-8"
        )}
      >
        {items.map((item) => (
            <li key={item.href}>
                <NavItem href={item.href}>
                {item.label}
                </NavItem>
            </li>
        ))}
      </ul>
    </nav>
  );
}