import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./button.variants";

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
};

type MotionConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

export type ButtonProps =
  | (ButtonBaseProps &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionConflictingHandlers> & {
        href?: never;
      })
  | (ButtonBaseProps &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionConflictingHandlers> & {
        href: string;
      });