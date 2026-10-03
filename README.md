# MASCOTITAS — Pet Shop (React + Vite)

Proyecto migrado de HTML/CSS estático a una arquitectura moderna con React, Vite, Bootstrap y React Router.

## Estructura del proyecto

```
src/
├── assets/          # Recursos estáticos e imágenes
│   └── data/        # Datos mock para Gallery y Cards
├── components/      # Navbar, Footer, Layout, Card, Gallery, Contact
├── hooks/           # Custom hooks (useContactForm)
├── pages/           # HomePage, ProductosPage, GaleriaPage, ContactoPage
├── styles/          # CSS individual por componente
├── App.jsx          # Rutas con React Router
└── main.jsx         # Punto de entrada
```

## Repositorio y sitio publicado

- **GitHub:** https://github.com/daliendre95-spec/MascotitasPetshop
- **GitHub Pages:** https://daliendre95-spec.github.io/MascotitasPetshop/

## Demo formulario de contacto (TPF)

En `/contacto`, abrir DevTools (F12) → **Console**. Al editar campos verás logs `[Contacto] input:`; al enviar, `[Contacto] submit:`; al limpiar, `[Contacto] reset:`.

## Scripts

```bash
npm install    # Instalar dependencias
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm run preview # Vista previa del build
```

## Rutas

| Ruta        | Página      |
|-------------|-------------|
| `/`         | Inicio      |
| `/productos`| Productos   |
| `/galeria`  | Galería     |
| `/contacto` | Contacto    |

## Dependencias principales

- React 19
- Vite 6
- Bootstrap 5.3+
- React Router 7 (v6+ API compatible)

Los archivos HTML originales se conservaron en `legacy-html/` como referencia.
