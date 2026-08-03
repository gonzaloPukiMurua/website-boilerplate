import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils/cn";

import { buttonVariants } from "./button.variants";
import type { ButtonProps } from "./button.types";

export function Button({
  className,
  variant,
  size,
  fullWidth,
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        leftIcon
      )}

      {children}

      {!loading && rightIcon}
    </button>
  );
}