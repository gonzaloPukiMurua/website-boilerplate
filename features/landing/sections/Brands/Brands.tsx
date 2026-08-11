import Image from "next/image";
import { Section, Container, Text, Marquee } from "@/design-system";
import { brands } from "@/config/content/brands";

export function Brands() {
  return (
    <Section spacing="md" className="border-y border-border">
      <Container>
        <Text size="caption" weight="semibold" variant="muted" className="mb-8 text-center uppercase tracking-wide">
          {brands.title}
        </Text>
        <Marquee>
          {brands.items.map((brand) => (
            <Image
              key={brand.id}
              src={brand.logoSrc}
              alt={brand.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-60 grayscale"
            />
          ))}
        </Marquee>
      </Container>
    </Section>
  );
}