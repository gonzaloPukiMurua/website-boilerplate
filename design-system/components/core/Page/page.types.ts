import type { ElementType } from "react";

import type { PolymorphicComponentProps } from "@/design-system/types";

export type PageProps<T extends ElementType = "main"> =
  PolymorphicComponentProps<
    T,
    {
      centered?: boolean;
    }
  >;