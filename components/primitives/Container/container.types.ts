import type { PropsWithChildren } from "react";

import type { ContainerSize } from "@/config/theme/layout";

export interface ContainerProps extends PropsWithChildren {
  size?: ContainerSize;
  className?: string;
}