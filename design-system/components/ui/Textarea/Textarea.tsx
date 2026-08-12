import { forwardRef } from "react";

import { cn } from "@/design-system/utils/cn";

import { textareaVariants } from "./textarea.variants";
import type { TextareaProps } from "./textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          textareaVariants({ variant: error ? "error" : variant }),
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
