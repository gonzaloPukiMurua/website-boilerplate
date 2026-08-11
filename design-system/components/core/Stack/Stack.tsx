import type { ElementType } from "react";

import { flex, spacing} from "@/design-system/tokens";
import { cn } from "@/design-system/utils/cn";

import type { StackProps } from "./stack.types";

export function Stack<T extends ElementType = "div">({
  as,
  children,
  gap = "md",
  align = "start",
  justify = "start",
  className,
  ...props
}: StackProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "flex flex-col",
        spacing[gap],
        flex.align[align],
        flex.justify[justify],
        className,
        )}
      {...props}
    >
      {children}
    </Component>
  );
}