import { cn } from "@/lib/utils/cn";

import { badgeVariants } from "./badge.variants";
import type { BadgeProps } from "./badge.types";

export function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant }),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}