import { forwardRef } from "react";

import { cn } from "@/design-system/utils/cn";

import { inputVariants } from "./input.variants";
import type { InputProps } from "./input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({ variant: error ? "error" : variant }),
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
