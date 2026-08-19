"use client";

import { useState } from "react";
import { NavItem } from "../NavItem";
import { NavigationProps } from "./navigation.types";
import { NavigationToggle } from "../NavigationToggle";
import { NavigationMobileMenu } from "../NavigationMobileMenu";

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
      <ul className="hidden items-center gap-8 md:flex">
        {items.map((item) => (
          <li key={item.href}>
            <NavItem href={item.href}>
              {item.label}
            </NavItem>
          </li>
        ))}
      </ul>

      <NavigationToggle
        open={open}
        onToggle={() => setOpen((prev) => !prev)}
      />

      <NavigationMobileMenu
        items={items}
        open={open}
        onOpenChange={setOpen}
      />
    </nav>
  );
}