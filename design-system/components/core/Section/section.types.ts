import type { ElementType } from "react";

import type {
  SectionBackground,
  SectionSpacing,
} from "@/design-system/tokens/layout";
import type { PolymorphicComponentProps } from "@/design-system/types";

export type SectionProps<T extends ElementType = "section"> =
  PolymorphicComponentProps<
    T,
    {
      spacing?: SectionSpacing;
      background?: SectionBackground;
    }
  >;