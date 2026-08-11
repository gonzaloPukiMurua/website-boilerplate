import { cn } from "@/design-system/utils/cn";

import { NavbarProps } from "./navbar.types";

export function Navbar({
  logo,
  navigation,
  actions,
  className,
}: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex h-[65px] items-center justify-between",
        className
      )}
      aria-label="Main navigation"
    >
      <div className="flex shrink-0 items-center">
        {logo}
      </div>

      <div className="flex flex-1 justify-center">
        {navigation}
      </div>

      <div className="flex shrink-0 items-center justify-end">
        {actions}
      </div>
    </nav>
  );
}