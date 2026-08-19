export interface Brand {
  id: string;
  name: string;
  logoSrc: string;
}

// NOTA: logoSrc apunta a archivos que todavía no existen en /public/images/brands —
// pendiente de conseguir los logos reales de cada marca (ver SESSION_HANDOFF.md).
export const brands = {
  title: "Trabajamos con las marcas líderes",
  items: [
    { id: "genrod", name: "GENROD", logoSrc: "/images/brands/genrod.png" },
    { id: "sistelectric", name: "Sistelectric", logoSrc: "/images/brands/sistelectric.png" },
    { id: "schneider-electric", name: "Schneider Electric", logoSrc: "/images/brands/schneider-electric.png" },
    { id: "steck", name: "Steck", logoSrc: "/images/brands/steck.png" },
    { id: "baw-electric", name: "Baw Electric", logoSrc: "/images/brands/baw-electric.png" },
    { id: "tacoma", name: "Tacoma", logoSrc: "/images/brands/tacoma.png" },
    { id: "exultt", name: "Exultt", logoSrc: "/images/brands/exultt.png" },
    { id: "teclastar", name: "Teclastar", logoSrc: "/images/brands/teclastar.png" },
    { id: "taad", name: "Taad", logoSrc: "/images/brands/taad.png" },
    { id: "interelec", name: "Interelec", logoSrc: "/images/brands/interelec.png" },
    { id: "conextube", name: "Conextube", logoSrc: "/images/brands/conextube.png" },
    { id: "tableplast", name: "Tableplast", logoSrc: "/images/brands/tableplast.png" },
    { id: "roker", name: "Roker", logoSrc: "/images/brands/roker.png" },
    { id: "mh-conductores", name: "MH Conductores", logoSrc: "/images/brands/mh-conductores.png" },
    { id: "upercab", name: "Upercab", logoSrc: "/images/brands/upercab.png" },
    { id: "bandejas-elece", name: "Bandejas Elece", logoSrc: "/images/brands/bandejas-elece.png" },
    { id: "ferrolx", name: "Ferrolx", logoSrc: "/images/brands/ferrolx.png" },
    { id: "san-justo-iluminacion", name: "San Justo Iluminación", logoSrc: "/images/brands/san-justo-iluminacion.png" },
  ] satisfies Brand[],
};