import type { ElementType } from "react";

import { layout } from "@/design-system/tokens/layout";
import { cn } from "@/lib/utils/cn";

import type { ContainerProps } from "./container.types";

export function Container<T extends ElementType = "div">({
  as,
  children,
  size = "xl",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        layout.container[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}