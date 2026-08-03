import type { ElementType } from "react";

import { typography } from "@/design-system/tokens";
import { cn } from "@/lib/utils/cn";

import type { TextProps } from "./text.types";

export function Text<T extends ElementType = "p">({
  as,
  children,
  className,
  size = "body",
  weight = "normal",
  variant = "default",
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        typography[size],
        typography.weight[weight],
        typography.color[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}