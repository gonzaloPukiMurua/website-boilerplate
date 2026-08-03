import type { ElementType } from "react";

import { layout } from "@/design-system/tokens/layout";
import { cn } from "@/lib/utils/cn";

import type { SectionProps } from "./section.types";

export function Section<T extends ElementType = "section">({
  as,
  children,
  spacing = "lg",
  background = "default",
  className,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(
        layout.section[spacing],
        layout.background[background],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}