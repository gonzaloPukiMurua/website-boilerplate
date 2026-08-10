import Link from "next/link";

import { cn } from "@/lib/utils/cn";

import { NavItemProps } from "./nav-item.types";

export function NavItem({
  href,
  children,
  active = false,
  className,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex border-b-2 pb-1 text-sm font-medium transition-colors",
        active
          ? "border-primary text-white"
          : "border-transparent text-white/80 hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}