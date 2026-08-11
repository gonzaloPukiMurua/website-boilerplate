import { cn } from "@/design-system/utils/cn";

import { cardVariants } from "./card.variants";
import type { CardProps } from "./card.types";

export function Card({
  className,
  variant,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}