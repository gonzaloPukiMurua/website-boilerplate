import { cn } from "@/design-system/utils/cn";

import { NavbarActionsProps } from "./navbar-actions.types";

export function NavbarActions({
  children,
  className,
}: NavbarActionsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}