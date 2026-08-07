import Link from "next/link";

import { cn } from "@/lib/utils/cn";

import { LogoProps } from "./logo.types";

export function Logo({
  href = "/",
  children,
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Home"
      className={cn(
        "inline-flex items-center",
        className
      )}
    >
      {children}
    </Link>
  );
}