import { MessageCircle } from "lucide-react";

import { Section, Container, Grid, Stack, Card, Heading, Icon } from "@/design-system";
import { contact as siteContact } from "@/config/site/contact";
import { ContactForm } from "@/features/landing/components/ContactForm";
import { ContactInfoItem } from "@/features/landing/components/ContactInfoItem";
import { ContactMap } from "@/features/landing/components/ContactMap";
import { ContactProps } from "./contact.types";

export function Contact({ formTitle, infoTitle, infoItems, whatsappCta }: ContactProps) {
  const fullAddress = [siteContact.address, siteContact.city, siteContact.state, siteContact.country]
    .filter(Boolean)
    .join(", ");

  const infoValues: Record<string, { value: string; href?: string }> = {
    address: { value: fullAddress },
    phone: {
      value: siteContact.phone ?? "",
      href: siteContact.phone ? `tel:${siteContact.phone.replace(/\s+/g, "")}` : undefined,
    },
    email: {
      value: siteContact.email ?? "",
      href: siteContact.email ? `mailto:${siteContact.email}` : undefined,
    },
  };

  return (
    <Section spacing="lg">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="xl" className="items-start">
          <Card variant="outlined" className="bg-muted p-8">
            <Heading level="h2" className="mb-6">
              {formTitle}
            </Heading>
            <ContactForm />
          </Card>

          <Stack gap="lg" className="w-full">
            <Heading level="h2">{infoTitle}</Heading>

            <Stack gap="md" className="w-full">
              {infoItems.map((item) => (
                <ContactInfoItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  value={infoValues[item.id]?.value ?? ""}
                  href={infoValues[item.id]?.href}
                />
              ))}
            </Stack>

            {siteContact.whatsapp && (
              <a
                href={siteContact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-4 rounded-xl border border-green-100 bg-green-50 p-5 transition-colors hover:bg-green-100"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  <Icon icon={MessageCircle} size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-wide text-green-700 uppercase">
                    {whatsappCta.eyebrow}
                  </span>
                  <span className="block text-lg font-bold text-foreground">
                    {whatsappCta.title}
                  </span>
                </span>
              </a>
            )}

            <ContactMap
              query={fullAddress}
              label={`Ubicación — ${infoItems[0]?.label ?? "Casa Central"}`}
            />
          </Stack>
        </Grid>
      </Container>
    </Section>
  );
}
