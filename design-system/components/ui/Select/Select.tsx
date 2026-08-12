import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/design-system/utils/cn";

import { selectVariants } from "./select.variants";
import type { SelectProps } from "./select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, error, options, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            selectVariants({ variant: error ? "error" : variant }),
            className,
          )}
          aria-invalid={error ? true : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    );
  },
);

Select.displayName = "Select";
