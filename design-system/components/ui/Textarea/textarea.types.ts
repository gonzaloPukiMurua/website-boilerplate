import type { TextareaHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { textareaVariants } from "./textarea.variants";

export type TextareaProps = VariantProps<typeof textareaVariants> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: string;
  };
