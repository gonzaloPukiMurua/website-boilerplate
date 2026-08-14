import { Container } from "@/design-system/components/core/Container";
import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/components/ui/Button";
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
        "flex min-h-[560px] items-start justify-center bg-primary text-primary-foreground",
        "pt-28 pb-16 sm:min-h-[650px] sm:pt-36 sm:pb-24 lg:min-h-[792px] lg:pt-48 lg:pb-32",
        className
      )}
    >
      <Container className="max-w-3xl">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          <span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-sm font-medium">
            {eyebrow}
          </span>

          <h1 className="font-heading text-3xl font-bold italic leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="font-sans text-base font-normal text-primary-foreground/80 sm:text-lg">
            {description}
          </p>

          <Button
            href={ctaHref}
            variant="secondary"
            size="lg"
          >
            {ctaLabel}
          </Button>

          {value && (
            <div className="font-sans">
              {value}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}