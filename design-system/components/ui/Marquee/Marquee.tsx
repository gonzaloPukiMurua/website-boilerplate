import { cn } from "@/design-system/utils/cn";
import type { MarqueeProps } from "./marquee.types";

export function Marquee({ children, pauseOnHover = true, className }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee gap-16",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}