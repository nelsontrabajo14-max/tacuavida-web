# Tacuavida

Sitio web del residencial Tacuavida, ubicado en Dr. Elias Abdo 259, Tacuarembó, Uruguay. Incluye las propuestas Tacuavida y Tacuavida Plus.

## Desarrollo

Requisitos: Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

La aplicación es una SPA de React, TypeScript y Vite. Solo `index.html` queda como entrada del navegador; las páginas se renderizan desde rutas React:

| Ruta | Componente |
|---|---|
| `/` | `src/pages/HomePage.tsx` |
| `/nosotros` | `src/pages/NosotrosPage.tsx` |
| `/tacuavida` | `src/pages/GalleryPage.tsx` |
| `/tacuavida-plus` | `src/pages/GalleryPage.tsx` |
| `/contacto` | `src/pages/ContactPage.tsx` |

Las antiguas direcciones `.html` redirigen a las rutas nuevas. En producción, el servidor web debe dirigir las rutas de la SPA a `index.html`.

## Publicación

El repositorio usa GitHub Actions para compilar y publicar en GitHub Pages al actualizar `main`. Activa la publicación en **Settings → Pages → Build and deployment → GitHub Actions**.

Sitio publicado: https://nelsontrabajo14-max.github.io/tacuavida-web/

## Estructura principal

```text
src/
  components/
    Header.tsx
    Footer.tsx
  pages/
    HomePage.tsx
    NosotrosPage.tsx
    GalleryPage.tsx
    ContactPage.tsx
  styles/
    style.css
    variables.css
    index.css
    nosotros.css
    galeria.css
    contacto.css
  main.tsx
index.html
vite.config.js
tsconfig.json
```

Los estilos globales y específicos de cada página están organizados en `src/styles/` y se cargan desde `src/main.tsx`. Las imágenes y videos están en `tacuavidaPlusImg/`.

## Contenido

- **Inicio:** editar `proposals`, `advantages` y `previewImages` en `src/pages/HomePage.tsx`.
- **Nosotros:** editar `values`, `statistics` y `teamMembers` en `src/pages/NosotrosPage.tsx`. Los nombres, cargos, años y cantidad de residentes aún contienen placeholders. El equipo se muestra con iniciales mientras no haya fotos y datos reales.
- **Galerías:** editar `standardGallery`, `plusGallery` y sus listas de características en `src/pages/GalleryPage.tsx`. Ambas galerías comparten filtros apropiados, tarjetas y visor ampliado con navegación por teclado.
- **Contacto:** el formulario y su validación están en `src/pages/ContactPage.tsx`. El endpoint Formspree sigue siendo `YOUR_FORM_ID`; hay que reemplazarlo por el identificador real para habilitar envíos.
- **Reseñas:** Firebase no tiene credenciales configuradas. La página Inicio informa que las reseñas no están disponibles; no se envían ni guardan reseñas.

## Datos de contacto

- Teléfono: 091 495 747
- Email: contacto@tacuavida.com
- Dirección: Dr. Elias Abdo 259, Tacuarembó
- Instagram: [@residencial.tacuavida](https://www.instagram.com/residencial.tacuavida/)
- WhatsApp: [wa.me/59891495747](https://wa.me/59891495747)
