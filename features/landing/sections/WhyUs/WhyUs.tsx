import Image from "next/image";
import { Section, Container, Grid, Stack, Heading, Text } from "@/design-system";
import { WhyUsCard } from "@/features/landing/components/WhyUsCard";
import { WhyUsProps } from "./why-us.types";

export function WhyUs({ title, description, image, items }: WhyUsProps) {
  return (
    <Section spacing="lg">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="xl" className="items-center">
          <Stack gap="md">
            <Heading level="h2">{title}</Heading>
            <Text variant="muted">{description}</Text>
            <Grid cols={{ base: 1, sm: 2 }} gap="md">
              {items.map((item) => (
                <WhyUsCard key={item.id} item={item} />
              ))}
            </Grid>
          </Stack>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        </Grid>
      </Container>
    </Section>
  );
}