import { Heading, Text, Icon } from "@/design-system";
import { contactIconMap } from "@/features/landing/lib/contact-icon-map";
import type { ContactIcon } from "@/config/content/contact";

interface ContactInfoItemProps {
  icon: ContactIcon;
  label: string;
  value: string;
  href?: string;
}

export function ContactInfoItem({ icon, label, value, href }: ContactInfoItemProps) {
  const valueElement = href ? (
    <a href={href} className="hover:text-primary transition-colors">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="flex items-start gap-3">
      <Icon icon={contactIconMap[icon]} size={20} className="mt-1 shrink-0 text-primary" />
      <div>
        <Heading level="h3" size="h4" weight="semibold" className="mb-1">
          {label}
        </Heading>
        <Text size="bodySm" variant="muted">
          {valueElement}
        </Text>
      </div>
    </div>
  );
}
