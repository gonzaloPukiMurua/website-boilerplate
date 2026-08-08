import { Container } from "@/design-system/components/core/Container";
import { cn } from "@/lib/utils/cn";

import { HeroProps } from "./hero.types";

export function Hero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  value,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "flex min-h-[792px] items-start justify-center",
        "px-6 pb-32 pt-48",
        className
      )}
    >
      <Container className="max-w-3xl">
        <div className="flex flex-col gap-8">
          <span className="w-fit px-3 py-1 text-sm">
            {eyebrow}
          </span>

          <h1 className="text-5xl font-bold italic leading-tight">
            {title}
          </h1>

          <p className="text-lg font-normal">
            {description}
          </p>

          <a
            href={ctaHref}
            className="w-fit"
          >
            {ctaLabel}
          </a>

          {value && (
            <div>
              {value}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}