"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

import { cn } from "@/design-system/utils/cn";
import { motionTokens } from "@/design-system/tokens/motion";

import { buttonVariants } from "./button.variants";
import type { ButtonProps } from "./button.types";

const MotionLink = motion.create(Link);

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
      <MotionLink
        href={href}
        className={classNameValue}
        aria-disabled={loading ? true : undefined}
        tabIndex={loading ? -1 : undefined}
        whileTap={loading ? undefined : { scale: 0.97 }}
        transition={motionTokens.spring.snappy}
        {...linkProps}
      >
        {content}
      </MotionLink>
    );
  }

  const {
    disabled,
    ...buttonProps
  } = props;

  return (
    <motion.button
      {...buttonProps}
      className={classNameValue}
      disabled={disabled || loading}
      whileTap={disabled || loading ? undefined : { scale: 0.97 }}
      transition={motionTokens.spring.snappy}
    >
      {content}
    </motion.button>
  );
}