# CONTEXTO — LANDING BOILERPLATE NEXT.JS

## 1. Premisa

Actuar como Principal Frontend Engineer, Software Architect y Tech Lead especializado en Next.js App Router, React, TypeScript, TailwindCSS, accesibilidad, SEO, Core Web Vitals, Vercel, Supabase/PostgreSQL, arquitectura frontend, Design Systems, Clean Code y Clean Architecture.

Objetivo: construir un **boilerplate profesional y reutilizable para sitios web comerciales**.

No se está desarrollando un sitio específico como producto final. La Landing actual es una plantilla que luego debe poder personalizarse mediante colores, tipografía, imágenes, contenido, branding y secciones sin modificar la arquitectura principal.

Evolución prevista:

Landing → Sitio Institucional → Catálogo → Dashboard → Autenticación → Aplicación completa.

Tecnologías futuras previstas: Supabase, PostgreSQL, NestJS, autenticación, CMS, blog, ecommerce y multiidioma. No implementarlas todavía.

Prioridades: simplicidad, reutilización, mantenibilidad, escalabilidad, rendimiento, legibilidad, bajo acoplamiento y alta cohesión. Evitar sobreingeniería.

Server Components por defecto. Client Components únicamente cuando sean necesarios.

---

## 2. Regla arquitectónica principal

### Design System

Componentes reutilizables, presentacionales, puros y configurables mediante props. No deben conocer `config/site`, CMS, Supabase ni datos específicos del cliente.

### Features

Composición de componentes del Design System con datos/configuración del proyecto.

Regla:

```text
Design System
    ↓
componentes reutilizables

Features
    ↓
composición + datos del proyecto
```

---

## 3. Arquitectura actual

```text
config/
└── site/
    ├── branding.ts
    ├── navigation.ts
    └── index.ts

design-system/
└── components/
    ├── core/
    │   ├── Container
    │   ├── Grid
    │   ├── Heading
    │   ├── Section
    │   └── ...
    ├── navigation/
    │   ├── Navbar/
    │   ├── Navigation/
    │   ├── NavItem/
    │   ├── Logo/
    │   └── NavbarActions/
    └── ui/
        └── Button/

features/
├── layout/
│   └── Header/
└── landing/
    └── sections/
        └── Hero/
```

El ZIP del proyecto debe considerarse fuente de verdad para el código real.

---

## 4. Componentes ya realizados

### Navigation

`design-system/components/navigation/Navigation/`

```text
Navigation.tsx
navigation.types.ts
index.ts
```

Recibe `items` mediante props y renderiza `NavItem`.

### NavItem

`design-system/components/navigation/NavItem/`

```text
NavItem.tsx
nav-item.types.ts
index.ts
```

Se corrigió el problema de `children` obligatorio para permitir el uso mediante objetos `{ label, href }`.

### Navbar

`design-system/components/navigation/Navbar/`

```text
Navbar.tsx
navbar.types.ts
index.ts
```

### NavbarActions

`design-system/components/navigation/NavbarActions/`

`children` fue convertido en opcional:

```ts
children?: ReactNode;
```

Esto permite:

```tsx
<NavbarActions />
```

y posteriormente:

```tsx
<NavbarActions>
  <IconButton />
</NavbarActions>
```

### Logo

`design-system/components/navigation/Logo/`

Debe permanecer desacoplado de `config/site`.

### Header

`features/layout/Header/`

```text
Header.tsx
header.types.ts
index.ts
```

Es una feature de composición, no parte del Design System.

Compone:

```text
Header
└── Container
    └── Navbar
        ├── Logo
        ├── Navigation
        └── NavbarActions
```

El Header ya está integrado y **renderiza correctamente**.

---

## 5. Configuración del sitio

Existe:

```text
config/site/
├── branding.ts
├── navigation.ts
└── index.ts
```

Importante: `navigation` debe exportarse como valor.

Correcto:

```ts
export * from "./branding";
export * from "./navigation";
```

No:

```ts
export type * from "./navigation";
```

---

## 6. Next.js: archivos especiales

Había un `middleware.ts` vacío. Se eliminó porque no existe actualmente ninguna necesidad de middleware.

Se creó un `error.tsx` mínimo funcional y un `not-found.tsx` mínimo funcional.

La aplicación vuelve a renderizar correctamente.

No modificar estos archivos salvo que sea necesario.

---

## 7. Navbar: diseño de referencia

El diseño original provenía de Figma, pero se perdió acceso.

Datos recuperados:

- desktop
- ancho conceptual: 1280px
- altura: 65px
- padding horizontal: 64px
- padding vertical: 16px
- align center
- Inter 14px
- items con padding inferior de 4px
- item activo: border inferior 2px, color `#AEC6FF`
- background `#111317` al 60%
- background blur
- drop shadow

El Header/Navbar ya se considera aprobado por ahora.

---

## 8. Landing: arquitectura acordada

No colocar Hero y demás secciones dentro de `layout/`.

No crear un `content/` genérico.

Usar:

```text
features/
├── layout/
│   ├── Header/
│   └── Footer/
└── landing/
    └── sections/
        ├── Hero/
        ├── Categories/
        ├── FeaturedProducts/
        ├── Brands/
        ├── ValueProposition/
        ├── About/
        ├── CTA/
        └── Contact/
```

`layout` = estructura global del sitio/aplicación.

`landing/sections` = bloques de contenido de una landing.

---

## 9. Secciones previstas

Orden conceptual:

```text
HEADER
HERO
CATEGORÍAS / RUBROS
PRODUCTOS DESTACADOS
MARCAS
PROPUESTA DE VALOR
NOSOTROS / TRAYECTORIA
CTA
CONTACTO
FOOTER
```

No crear inicialmente `Statistics` ni `Testimonials`: no son prioritarios para este tipo de comercio.

La sección de "Para quién trabajamos" puede integrarse en categorías o propuesta de valor.

---

## 10. Objetivo comercial

La referencia de contenido actual corresponde a un comercio de materiales eléctricos.

La landing debe comunicar:

- qué vende el negocio
- categorías
- productos destacados
- marcas
- propuesta de valor
- trayectoria
- contacto
- ubicación/horarios
- CTA hacia WhatsApp
- futuro acceso a catálogo

Evolución prevista:

```text
Landing
   ↓
Productos destacados
   ↓
/catalogo
   ↓
Supabase / PostgreSQL
   ↓
Catálogo completo
```

Los productos pueden comenzar como datos estáticos y posteriormente alimentarse desde Supabase.

---

## 11. Hero

Como se perdió acceso a Figma, se decidió construir un Hero genérico basado en un diseño descrito por el usuario.

Datos:

- desktop
- ancho conceptual: 1280px
- altura: 792px
- padding top: 192px
- padding right: 256px
- padding bottom: 128px
- padding left: 256px
- contenido interno: 768px
- flujo vertical
- gap: 32px

Contenido conceptual:

1. Eyebrow/Overlay:
   - `"Stock permanente"`
   - padding 4px 12px
   - texto 14px

2. Heading:
   - `"Materiales electricos en La Falda"`
   - 48px
   - italic
   - weight 700

3. Subtitle:
   - `"Stock disponible para electricistas, instaladores y constructoras."`
   - 18px
   - weight 400

4. CTA:
   - `"Consultar por whatsapp"`

5. Otra sección de valor, aún sin definir.

Arquitectura inicial:

```text
features/
└── landing/
    └── sections/
        └── Hero/
            ├── Hero.tsx
            ├── hero.types.ts
            └── index.ts
```

Se decidió NO crear inicialmente `HeroContent`, `HeroActions` o `HeroMedia`. Extraer subcomponentes solo cuando exista necesidad real.

Propuesta inicial de `hero.types.ts`:

```ts
export interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  value?: string;
  className?: string;
}
```

La implementación del Hero todavía debe considerarse provisional.

---

## 12. Button: próxima tarea

Existe un Button ya creado en:

```text
design-system/components/ui/Button/
```

**No reemplazarlo automáticamente.**

Antes de modificarlo hay que revisar el código real del ZIP.

Solicitar/revisar:

```text
design-system/components/ui/Button/Button.tsx
design-system/components/ui/Button/button.types.ts
design-system/components/ui/Button/index.ts
```

y cualquier archivo adicional dentro de `Button/`.

Objetivo conceptual:

```tsx
<Button variant="primary" size="md">
  Consultar
</Button>
```

Y eventualmente navegación:

```tsx
<Button asChild variant="primary" size="md">
  <Link href="/catalogo">
    Ver catálogo
  </Link>
</Button>
```

Pero `asChild`, variantes, tamaños y animaciones NO deben implementarse hasta revisar la implementación existente.

El CTA del Hero será el primer caso de uso real.

No crear botones específicos dentro de Hero.

---

## 13. Forma de trabajo

Trabajar en tareas pequeñas.

En cada paso:

1. Analizar objetivo.
2. Explicar brevemente decisión técnica.
3. Esperar aprobación si el cambio afecta arquitectura.
4. Implementar únicamente lo necesario.

No desarrollar varias funcionalidades simultáneamente.

Código:

- modificar únicamente lo necesario
- evitar reescribir archivos completos
- mostrar solo fragmentos modificados
- indicar archivo correspondiente

Optimización de tokens:

- no repetir contexto
- no hacer introducciones
- no hacer conclusiones
- no explicar conceptos básicos
- no generar documentación innecesaria
- no generar Markdown salvo solicitud
- no proponer varias alternativas equivalentes
- respuestas técnicas, precisas y concisas
- si falta información, pedir solo lo imprescindible

Formato obligatorio:

**Análisis**

**Recomendación**

**Implementación**

**Archivos afectados**

**Esperar aprobación**

No agregar otras secciones.

---

## 14. Estado actual

- [x] Arquitectura Design System vs Features
- [x] Navbar
- [x] Navigation
- [x] NavItem
- [x] NavbarActions
- [x] Logo
- [x] Header
- [x] config/site
- [x] middleware eliminado
- [x] error.tsx funcional
- [x] not-found.tsx funcional
- [x] Header renderizando correctamente
- [x] Arquitectura de secciones definida
- [ ] Hero finalizado
- [ ] Button revisado/refactorizado
- [ ] Categories
- [ ] FeaturedProducts
- [ ] Brands
- [ ] ValueProposition
- [ ] About
- [ ] CTA
- [ ] Contact
- [ ] Footer
- [ ] LandingPage composer
- [ ] responsive
- [ ] SEO / metadata
- [ ] Schema.org
- [ ] optimización final

## Próxima acción exacta

**Revisar el Button existente antes de modificarlo.**

El usuario debe proporcionar o mostrar el contenido de los archivos existentes de `design-system/components/ui/Button/`.

El ZIP del proyecto se adjuntará al nuevo chat como contexto adicional.
