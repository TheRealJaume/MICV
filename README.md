# CV Personal · Jaume Fabregat Marqués

Web de currículum premium en Next.js (App Router) + TypeScript + TailwindCSS + Framer Motion.

## Requisitos
- Node.js 18+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Build de producción
```bash
npm run build
npm run start
```

## Despliegue en Vercel
1. Sube este repositorio a GitHub.
2. En Vercel, importa el proyecto desde GitHub.
3. Asegura que el framework detectado es Next.js.
4. Deploy.

## Rutas principales
- `/es` y `/en` (landing)
- `/es/about`, `/en/about`
- `/es/experience`, `/en/experience`
- `/es/projects`, `/en/projects`
- `/es/skills`, `/en/skills`
- `/es/education`, `/en/education`
- `/es/languages`, `/en/languages`
- `/es/contact`, `/en/contact`

## Personalización rápida
- Contenido: `messages/es.json` y `messages/en.json`
- Metadatos/SEO por página: `src/lib/metadata.ts`
- Estilos globales: `src/app/globals.css`
- Secciones reutilizables: `src/components/sections`

## Notas de UI
- Guía de diseño y decisiones: `docs/ui_upgrade_notes.md`
