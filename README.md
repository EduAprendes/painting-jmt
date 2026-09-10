# JMT Painting LLC

Sitio web de JMT Painting LLC (Lithia Springs, GA) construido con [Next.js](https://nextjs.org) (App Router + TypeScript). Landing page de una sola página con toggle de idioma ES/EN, formulario de cotización, galería de proyectos filtrable y formulario de contacto.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Estructura

- `src/app` — layout, metadata SEO/Open Graph, JSON-LD y estilos globales (`globals.css`).
- `src/components` — una sección de la landing por archivo (Header, Hero, Services, Results, Process, About, Contact, Footer, etc).
- `src/lib/language-context.tsx` — contexto de idioma (ES/EN) y componentes `T` / `LocalizedImage` para textos e imágenes bilingües.
- `public/images` — fotos del sitio (extraídas del sitio original).
- `legacy/original-index.html` — versión estática original de referencia.

## Pendiente

Los formularios de cotización y contacto (`QuoteForm.tsx`, `ContactForm.tsx`) están listos en el frontend pero no envían datos a ningún backend todavía — hay un `TODO` en cada uno señalando dónde conectar email, CRM o un webhook.
