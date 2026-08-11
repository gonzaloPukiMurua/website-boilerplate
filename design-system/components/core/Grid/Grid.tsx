import type { ElementType } from "react";

import { grid, spacing } from "@/design-system/tokens";
import { cn } from "@/design-system/utils/cn";

import type { GridCols, GridProps } from "./grid.types";

function getResponsiveColumns(cols: GridCols) {
  return [
    cols.base && grid.responsiveColumns.base[cols.base],
    cols.sm && grid.responsiveColumns.sm[cols.sm],
    cols.md && grid.responsiveColumns.md[cols.md],
    cols.lg && grid.responsiveColumns.lg[cols.lg],
    cols.xl && grid.responsiveColumns.xl[cols.xl],
    cols["2xl"] && grid.responsiveColumns["2xl"][cols["2xl"]],
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