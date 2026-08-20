import { Section, Container, Grid, Stack, Heading, Text } from "@/design-system";
import { ServiceItem } from "@/features/landing/components/ServiceItem";
import { ServicesProps } from "./services.types";

export function Services({ eyebrow, title, description, items }: ServicesProps) {
  return (
    <Section spacing="lg">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="xl">
          <Stack gap="sm">
            <Text size="caption" weight="semibold" variant="destructive" className="uppercase tracking-wide">
              {eyebrow}
            </Text>
            <Heading level="h2">{title}</Heading>
            <Text variant="muted">{description}</Text>
          </Stack>
          <Grid cols={{ base: 1, sm: 2 }} gap="lg">
            {items.map((item) => (
              <ServiceItem key={item.id} item={item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}