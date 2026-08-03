import { layout } from "@/config/theme/layout";
import { cn } from "@/lib/utils/cn";

import type { ContainerProps } from "./container.types";

export function Container({
  children,
  size = "xl",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        layout.container[size],
        className,
      )}
    >
      {children}
    </div>
  );
}