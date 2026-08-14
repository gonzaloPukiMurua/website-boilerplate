import { Menu, X } from "lucide-react";

import { Button } from "@/design-system/components/ui/Button";
import { cn } from "@/design-system/utils/cn";

import type { NavigationToggleProps } from "./navigation-toggle.types";

export function NavigationToggle({
  open,
  onToggle,
  className,
}: NavigationToggleProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      aria-controls="mobile-navigation"
      onClick={onToggle}
      className={cn("md:hidden", className)}
    >
      {open ? <X /> : <Menu />}
    </Button>
  );
}