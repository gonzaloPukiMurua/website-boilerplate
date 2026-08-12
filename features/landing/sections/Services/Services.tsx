import { Section, Container, Grid, Stack, Heading, Text } from "@/design-system";
import { service } from "@/config/content/service";
import { ServiceItem } from "@/features/landing/components/ServiceItem";

export function Services() {
  return (
    <Section spacing="lg">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="xl">
          <Stack gap="sm">
            <Text size="caption" weight="semibold" variant="destructive" className="uppercase tracking-wide">
              {service.eyebrow}
            </Text>
            <Heading level="h2">{service.title}</Heading>
            <Text variant="muted">{service.description}</Text>
          </Stack>
          <Grid cols={{ base: 1, sm: 2 }} gap="lg">
            {service.items.map((item) => (
              <ServiceItem key={item.id} item={item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}