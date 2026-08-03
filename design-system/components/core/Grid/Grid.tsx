import type { ElementType } from "react";

import { grid, spacing } from "@/design-system/tokens";
import { cn } from "@/lib/utils/cn";

import type { GridCols, GridProps } from "./grid.types";

function getResponsiveColumns(cols: GridCols) {
  return [
    cols.base && grid.columns[cols.base],
    cols.sm && `sm:${grid.columns[cols.sm]}`,
    cols.md && `md:${grid.columns[cols.md]}`,
    cols.lg && `lg:${grid.columns[cols.lg]}`,
    cols.xl && `xl:${grid.columns[cols.xl]}`,
    cols["2xl"] && `2xl:${grid.columns[cols["2xl"]]}`,
  ];
}

export function Grid<T extends ElementType = "div">({
  as,
  children,
  cols = { base: 1 },
  gap = "lg",
  className,
  ...props
}: GridProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "grid",
        getResponsiveColumns(cols),
        spacing[gap],
        className,
        )}
      {...props}
    >
      {children}
    </Component>
  );
}