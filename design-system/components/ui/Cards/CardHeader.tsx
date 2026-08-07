import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 p-6",
        className,
      )}
      {...props}
    />
  );
}