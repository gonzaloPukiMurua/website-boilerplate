import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { inputVariants } from "./input.variants";

export type InputProps = VariantProps<typeof inputVariants> &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
  };
