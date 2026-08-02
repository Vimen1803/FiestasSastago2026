# Fiestas de Sástago 2026 — San Roque y Virgen de Montler

Web mobile-first con el programa de las fiestas de Sástago (13–18 de agosto de 2026), construida con Next.js 14 (App Router) y Tailwind CSS.

## Estructura

- **Inicio** (`/`): calendario con los 6 días de fiestas en formato "ticket".
- **Día** (`/dia/13` … `/dia/18`): lista de actos de ese día, cada uno con hora, título, descripción y un mini-mapa que enlaza a Google Maps.
- Header y footer compartidos en todas las páginas ("Página hecha por Víctor Menjón").
- SEO: metadatos, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, datos estructurados (JSON-LD) y un icono/imagen para compartir generados automáticamente (`app/opengraph-image.jsx`, `app/icon.jsx`, `app/apple-icon.jsx`).

## Editar los actos

Todo el contenido de los actos vive en **`data/events.js`**. Cada día tiene un array `events` con:

```js
{
  time: '12:00',
  title: 'Título del acto',
  description: 'Descripción...',
  ...mapQuery('Nombre del lugar'), // genera el mapa y el enlace a Google Maps
}
```

### Actualizar las ubicaciones de los mapas

Ahora mismo cada acto usa `mapQuery('Nombre del lugar')`, que busca ese nombre + "Sástago, Zaragoza" en Google Maps (sin dirección exacta ni coordenadas). Cuando tengas las ubicaciones exactas, tienes dos opciones dentro de `data/events.js`:

1. **Cambiar el texto de búsqueda**: ajusta el nombre en `mapQuery('...')` por la dirección exacta, ej. `mapQuery('Calle Mayor 12')`.
2. **Usar coordenadas exactas** (más preciso): sustituye la llamada a `mapQuery(...)` por algo como:

```js
place: 'Plaza Ramón y Cajal',
embedSrc: 'https://www.google.com/maps?q=41.XXXXX,-0.XXXXX&output=embed',
linkHref: 'https://www.google.com/maps/search/?api=1&query=41.XXXXX,-0.XXXXX',
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub/GitLab (o usa `vercel` CLI directamente sobre esta carpeta).
2. En [vercel.com](https://vercel.com), importa el repositorio (Next.js se detecta automáticamente, no hace falta configurar nada).
3. Despliega. Cada `git push` volverá a desplegar automáticamente.

También puedes desplegar sin Git, desde esta misma carpeta:

```bash
npm install -g vercel
vercel
```

### Dominio propio

Una vez desplegado, en el proyecto de Vercel ve a **Settings → Domains** y añade tu dominio (ej. `fiestassastago.com`). Después actualiza la constante `SITE_URL` en `app/layout.js`, `app/sitemap.js` y `app/robots.js` con la URL definitiva para que el SEO y las imágenes de compartir usen el dominio correcto.

## Notas

- El diseño está pensado para verse como una app de móvil: en pantallas grandes el contenido se queda centrado en una columna de ancho de móvil (ver `.app-shell` en `app/globals.css`).
- Los colores, tipografías (Fredoka + Work Sans) y el estilo "ticket de festival" están centralizados en `tailwind.config.js` y `app/globals.css`.
