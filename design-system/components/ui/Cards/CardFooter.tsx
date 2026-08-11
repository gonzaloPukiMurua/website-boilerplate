import type { HTMLAttributes } from "react";

import { cn } from "@/design-system/utils/cn";

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center p-6 pt-0",
        className,
      )}
      {...props}
    />
  );
}