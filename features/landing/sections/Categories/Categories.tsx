import { Section, Container, Stack, Grid, Heading, Text } from "@/design-system";
import { categories } from "@/config/content/categories";
import { CategoryCard } from "@/features/landing/components/CategoryCard";

export function Categories() {
  return (
    <Section spacing="lg">
      <Container>
        <Stack gap="sm" className="items-center text-center mb-12">
          <Heading level="h2">Soluciones Integrales</Heading>
          <Text variant="muted" className="max-w-2xl">
            Explore nuestro catálogo categorizado diseñado para satisfacer los estándares más exigentes de la industria eléctrica.
          </Text>
        </Stack>
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap="md">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}