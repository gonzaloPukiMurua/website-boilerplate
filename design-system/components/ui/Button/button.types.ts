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

export type ButtonProps =
  | (ButtonBaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (ButtonBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });