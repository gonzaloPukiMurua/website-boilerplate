import type { ElementType } from "react";

import { cn } from "@/lib/utils/cn";

import type { PageProps } from "./page.types";

export function Page<T extends ElementType = "main">({
  as,
  centered = false,
  className,
  children,
  ...props
}: PageProps<T>) {
  const Component = as ?? "main";

  return (
    <Component
      className={cn(
        "flex min-h-screen flex-col",
        centered && "justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}