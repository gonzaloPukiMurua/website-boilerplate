import type { HTMLAttributes } from "react";

import type { VariantProps } from "class-variance-authority";

import { cardVariants } from "./card.variants";

type MotionConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

export type CardProps =
  Omit<HTMLAttributes<HTMLDivElement>, MotionConflictingHandlers> &
  VariantProps<typeof cardVariants>;