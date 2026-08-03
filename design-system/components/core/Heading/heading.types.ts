import type { ElementType } from "react";

import type {
  FontWeight,
  HeadingSize,
} from "@/design-system/tokens";
import type { PolymorphicComponentProps } from "@/design-system/types";

export type HeadingLevel =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type HeadingProps<T extends ElementType = "h2"> =
  PolymorphicComponentProps<
    T,
    {
      level?: HeadingLevel;
      size?: HeadingSize;
      weight?: FontWeight;
    }
  >;