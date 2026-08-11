import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/design-system";
import { Icon } from "@/design-system";
import { categoryIconMap } from "@/features/landing/lib/category-icon-map";
import type { CategoryCardProps } from "./category-card.types";

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card>
      <CardHeader>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon icon={categoryIconMap[category.icon]} />
        </span>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={category.href} className="inline-flex items-center gap-1 text-sm font-medium text-destructive">
          Ver Más <span aria-hidden>›</span>
        </a>
      </CardFooter>
    </Card>
  );
}