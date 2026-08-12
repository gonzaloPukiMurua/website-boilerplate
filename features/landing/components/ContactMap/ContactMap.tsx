interface ContactMapProps {
  query: string;
  label: string;
}

export function ContactMap({ query, label }: ContactMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border sm:aspect-video">
      <iframe
        src={src}
        title={label}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}
