import Link from "next/link";
import { Loader2 } from "lucide-react";

import { cn } from "@/design-system/utils/cn";

import { buttonVariants } from "./button.variants";
import type { ButtonProps } from "./button.types";

export function Button(props: ButtonProps) {
  const {
    className,
    variant,
    size,
    fullWidth,
    leftIcon,
    rightIcon,
    loading = false,
    children,
  } = props;

  const classNameValue = cn(
    buttonVariants({
      variant,
      size,
      fullWidth,
    }),
    className,
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        leftIcon
      )}

      {children}

      {!loading && rightIcon}
    </>
  );

  if (typeof props.href === "string") {
  const {
    href,
    ...linkProps
  } = props;

    return (
      <Link
        href={href}
        className={classNameValue}
        aria-disabled={loading ? true : undefined}
        tabIndex={loading ? -1 : undefined}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const {
    disabled,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={classNameValue}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}