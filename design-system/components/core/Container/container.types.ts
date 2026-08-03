import type { ElementType } from "react";

import type { ContainerSize } from "@/design-system/tokens/layout";
import type { PolymorphicComponentProps } from "@/design-system/types";

export type ContainerProps<T extends ElementType = "div"> =
  PolymorphicComponentProps<
    T,
    {
      size?: ContainerSize;
    }
  >;