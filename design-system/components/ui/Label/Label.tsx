import { cn } from "@/design-system/utils/cn";

import type { LabelProps } from "./label.types";

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-2 block text-xs font-medium tracking-wide text-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}
