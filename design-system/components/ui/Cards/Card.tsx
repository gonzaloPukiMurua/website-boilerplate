"use client";

import { motion } from "motion/react";

import { cn } from "@/design-system/utils/cn";
import { motionTokens } from "@/design-system/tokens/motion";

import { cardVariants } from "./card.variants";
import type { CardProps } from "./card.types";

export function Card({
  className,
  variant,
  children,
  ...props
}: CardProps) {
  const isInteractive = variant === "interactive";

  return (
    <motion.div
      className={cn(
        cardVariants({ variant }),
        className,
      )}
      whileHover={isInteractive ? { y: -4 } : undefined}
      whileTap={isInteractive ? { scale: 0.98 } : undefined}
      transition={motionTokens.spring.gentle}
      {...props}
    >
      {children}
    </motion.div>
  );
}