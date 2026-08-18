import { Card, CardHeader, CardTitle, CardDescription, CardFooter, Text } from "@/design-system";
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
        <Text
          as="a"
          href={category.href}
          size="bodySm"
          weight="medium"
          variant="destructive"
          className="inline-flex items-center gap-1"
        >
          Ver Más <span aria-hidden>›</span>
        </Text>
      </CardFooter>
    </Card>
  );
}