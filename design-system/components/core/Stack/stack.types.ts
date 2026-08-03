import type { ElementType } from "react";

import type { PolymorphicComponentProps } from "@/design-system/types";

export type StackGap =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type StackAlign =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline";

export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export type StackProps<T extends ElementType = "div"> =
  PolymorphicComponentProps<
    T,
    {
      gap?: StackGap;
      align?: StackAlign;
      justify?: StackJustify;
    }
  >;