import type { HTMLAttributes } from "react";

import type { VariantProps } from "class-variance-authority";

import { cardVariants } from "./card.variants";

export type CardProps =
  HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;