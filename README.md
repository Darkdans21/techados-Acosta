# Techados Acosta

Sitio web estático para GitHub Pages.

## Estructura

- `index.html`
- `css/style.css`
- `js/script.js`
- `src/` imágenes del proyecto

## Cómo actualizar datos

En `js/script.js`, modifica el bloque `CONFIG`:

```js
phoneDisplay: "+52 (81) 1587-6112",
phoneRaw: "528115876112",
email: "techadosacosta@gmail.com",
facebook: "https://www.facebook.com/techados.acosta"
```

## Cómo agregar trabajos a la galería

1. Sube la imagen a la carpeta `src`.
2. En `js/script.js`, agrega un objeto nuevo dentro de `works`:

```js
{
  title: "Nombre del trabajo",
  description: "Descripción breve",
  category: "Categoría",
  img: "src/nombre-de-la-imagen.jpeg"
}
```

## Analítica de visitas

Para medir visitas reales, usa Cloudflare Web Analytics y pega el script antes de `</body>` en `index.html`.
GitHub Pages no guarda visitas por sí solo.
