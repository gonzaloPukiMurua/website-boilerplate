import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ icon: LucideIconComponent, size = 24, strokeWidth = 2, className }: IconProps) {
  return (
    <LucideIconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={cn(className)}
      aria-hidden="true"
    />
  );
}