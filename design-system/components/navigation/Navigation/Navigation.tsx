"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { NavItem } from "../NavItem";
import { NavigationProps } from "./navigation.types";

export function Navigation({
  items,
  className,
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Primary"
      className={className}
    >
      <ul
        className={cn(
          "hidden items-center gap-8 md:flex"
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