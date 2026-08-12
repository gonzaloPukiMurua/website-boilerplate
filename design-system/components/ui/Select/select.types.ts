import type { SelectHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { selectVariants } from "./select.variants";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = VariantProps<typeof selectVariants> &
  SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    error?: string;
  };
