import Image from "next/image";
import { Section, Container, Grid, Stack, Heading, Text } from "@/design-system";
import { whyUs } from "@/config/content/why-us";
import { WhyUsCard } from "@/features/landing/components/WhyUsCard";

export function WhyUs() {
  return (
    <Section spacing="lg">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="xl" className="items-center">
          <Stack gap="md">
            <Heading level="h2">{whyUs.title}</Heading>
            <Text variant="muted">{whyUs.description}</Text>
            <Grid cols={{ base: 1, sm: 2 }} gap="md">
              {whyUs.items.map((item) => (
                <WhyUsCard key={item.id} item={item} />
              ))}
            </Grid>
          </Stack>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image src={whyUs.image.src} alt={whyUs.image.alt} fill className="object-cover" />
          </div>
        </Grid>
      </Container>
    </Section>
  );
}