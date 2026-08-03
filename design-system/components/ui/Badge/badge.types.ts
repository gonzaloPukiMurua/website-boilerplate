import type { HTMLAttributes } from "react";

import type { VariantProps } from "class-variance-authority";

import { badgeVariants } from "./badge.variants";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}