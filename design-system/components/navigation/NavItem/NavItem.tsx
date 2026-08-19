"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { cn } from "@/design-system/utils/cn";
import { motionTokens } from "@/design-system/tokens/motion";

import { NavItemProps } from "./nav-item.types";

export function NavItem({
  href,
  children,
  active = false,
  className,
  onClick
}: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex pb-1 text-sm font-medium transition-colors",
        active
          ? "text-primary"
          : "text-foreground/80 hover:text-primary",
        className
      )}
    >
      {children}
      <motion.span
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
        initial={false}
        animate={{ scaleX: active || isHovered ? 1 : 0 }}
        transition={motionTokens.spring.gentle}
      />
    </Link>
  );
}