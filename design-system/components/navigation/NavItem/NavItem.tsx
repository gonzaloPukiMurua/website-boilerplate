import Link from "next/link";

import { cn } from "@/design-system/utils/cn";

import { NavItemProps } from "./nav-item.types";

export function NavItem({
  href,
  children,
  active = false,
  className,
  onClick
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex border-b-2 pb-1 text-sm font-medium transition-colors",
        active
          ? "border-primary text-primary"
          : "border-transparent text-foreground/80 hover:border-primary/40 hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}