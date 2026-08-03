import type { ElementType } from "react";

import { typography } from "@/design-system/tokens";
import { cn } from "@/lib/utils/cn";

import type { HeadingProps } from "./heading.types";

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  level = "h2",
  size,
  weight = "bold",
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? level) as ElementType;
  const defaultHeadingSize = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h4",
    h6: "h4",
    } as const;  
  return (
    <Component
      className={cn(
            typography[size ?? defaultHeadingSize[level]],
            typography.weight[weight],
            "tracking-tight text-foreground",
            className,
        )}
      {...props}
    >
      {children}
    </Component>
  );
}