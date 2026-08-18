import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Container, Grid, Heading, Icon, Stack, Text } from "@/design-system";
import { Logo } from "@/design-system/components/navigation/Logo";
import { cn } from "@/design-system/utils/cn";
import { branding, contact, navigation } from "@/config/site";

import { FooterProps } from "./footer.types";

export function Footer({ className }: FooterProps) {
  const fullAddress = [contact.address, contact.city, contact.state, contact.country]
    .filter(Boolean)
    .join(", ");

  const year = new Date().getFullYear();

  const linkClassName =
    "text-sm text-muted-foreground transition-colors hover:text-primary";

  return (
    <footer className={cn("border-t border-border bg-background", className)}>
      <Container>
        <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="lg" className="py-12">
          <Stack gap="sm">
            <Logo href={branding.homeHref}>
              <span className="text-lg font-semibold text-foreground">
                {branding.name}
              </span>
            </Logo>
          </Stack>

          <Stack gap="sm">
            <Heading level="h3" size="h4">
              Navegación
            </Heading>
            <Stack as="ul" gap="xs">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Stack>
          </Stack>

          <Stack gap="sm">
            <Heading level="h3" size="h4">
              Contacto
            </Heading>
            <Stack as="ul" gap="xs">
              {fullAddress && (
                <li className="flex items-center gap-2">
                  <Icon icon={MapPin} size={16} className="shrink-0 text-muted-foreground" />
                  <Text size="bodySm" variant="muted">
                    {fullAddress}
                  </Text>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-center gap-2">
                  <Icon icon={Phone} size={16} className="shrink-0 text-muted-foreground" />
                  <a href={`tel:${contact.phone}`} className={linkClassName}>
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="flex items-center gap-2">
                  <Icon icon={Mail} size={16} className="shrink-0 text-muted-foreground" />
                  <a href={`mailto:${contact.email}`} className={linkClassName}>
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.whatsapp && (
                <li className="flex items-center gap-2">
                  <Icon icon={MessageCircle} size={16} className="shrink-0 text-muted-foreground" />
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </Stack>
          </Stack>
        </Grid>

        <div className="border-t border-border py-6 text-center">
          <Text size="caption" variant="muted">
            © {year} {branding.name}. Todos los derechos reservados.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
