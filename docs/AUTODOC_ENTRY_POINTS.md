# AUTODOC: Entry Points (Puntos de Entrada) 📍

Este documento identifica y analiza los archivos críticos donde comienza la ejecución y se define la orquestación del sistema.

## 1. Lista de Entry Points

| Archivo | Ubicación | Rol Técnico |
| :--- | :--- | :--- |
| **Root Layout** | `src/app/layout.tsx` | Punto de entrada del Server-side. Define el shell global y metadatos. |
| **Dashboard Entry** | `src/app/page.tsx` | Punto de entrada del Client-side para la vista principal. Orquestador de lógica. |
| **Style Entry** | `src/app/globals.css` | Punto de entrada del sistema de diseño y tokens visuales. |

---

## 2. Flujo de Carga (Bootstrapping)

La aplicación sigue una secuencia de inicialización optimizada para Next.js:

1.  **Shell Inicial**: El servidor procesa `layout.tsx`, estableciendo la estructura base (`<html>`, `<body>`) y los metadatos SEO globales.
2.  **Inyección Estética**: Se carga `globals.css`, aplicando instantáneamente la paleta de colores corporativa y los estilos base.
3.  **Montaje Global**: El componente `Navbar` se renderiza de forma persistente, proporcionando el marco de identidad visual.
4.  **Hidratación de Lógica**: `page.tsx` se carga en el cliente como un componente reactivo, activando el **AI Advisor** y los gráficos de `SalesChart`.

---

## 3. Configuraciones Globales Críticas

- **Metadatos SEO**: Centralizados en el objeto `metadata` de `layout.tsx`. Define el título "Seller Command Center" y descriptores de búsqueda.
- **Design Tokens**: Ubicados en `globals.css`. Configura las variables para el azul/amarillo de Mercado Libre y los efectos de transparencia (*glassmorphism*).
- **Client Directives**: La página principal utiliza `"use client"` para permitir el uso de hooks de React y la interactividad de librerías como Recharts.

---

### 🧠 Archivos Cerebro
Los archivos mencionados arriba constituyen el núcleo de la aplicación. Cualquier cambio en estos archivos tiene un impacto sistémico en el ruteo, el diseño o la lógica de negocio fundamental del laboratorio.
