import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6 pt-0",
        className,
      )}
      {...props}
    />
  );
}