"use client";

import { Drawer } from "vaul";

import { cn } from "@/design-system/utils/cn";
import { NavItem } from "../NavItem";

import type { NavigationMobileMenuProps } from "./navigation-mobile-menu.types";

export function NavigationMobileMenu({
  items,
  open,
  onOpenChange,
  className,
}: NavigationMobileMenuProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} direction="top">
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-foreground/20 md:hidden" />
        <Drawer.Content
          id="mobile-navigation"
          className={cn(
            "fixed inset-x-0 top-[65px] z-40 flex flex-col gap-1 border-t border-border bg-background p-4 outline-none md:hidden",
            className
          )}
        >
          <Drawer.Title className="sr-only">Menú de navegación</Drawer.Title>
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavItem
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className="block border-b-0 py-3"
                >
                  {item.label}
                </NavItem>
              </li>
            ))}
          </ul>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
