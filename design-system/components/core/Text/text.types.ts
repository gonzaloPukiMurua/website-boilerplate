import type { ElementType } from "react";

import type {
  FontWeight,
  TextSize,
  TextVariant,
} from "@/design-system/tokens";
import type { PolymorphicComponentProps } from "@/design-system/types";

export type TextProps<T extends ElementType = "p"> =
  PolymorphicComponentProps<
    T,
    {
      size?: TextSize;
      weight?: FontWeight;
      variant?: TextVariant;
    }
  >;