import type { ElementType } from "react";

import type { PolymorphicComponentProps } from "@/design-system/types";

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;

export interface GridCols {
  base?: GridColumns;
  sm?: GridColumns;
  md?: GridColumns;
  lg?: GridColumns;
  xl?: GridColumns;
  "2xl"?: GridColumns;
}

export type GridGap =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type GridProps<T extends ElementType = "div"> =
  PolymorphicComponentProps<
    T,
    {
      cols?: GridCols;
      gap?: GridGap;
    }
  >;