# AUTODOC: Entry Points (Puntos de Entrada)

Este documento detalla los archivos críticos donde se inicializa la carga y la lógica del Seller Command Center.

## 1. Lista de Entry Points

| Archivo | Ubicación | Función Crítica |
| :--- | :--- | :--- |
| **Root Layout** | `src/app/layout.tsx` | Define el envoltorio HTML, carga las fuentes y monta la navegación persistente. |
| **Dashboard** | `src/app/page.tsx` | Controlador principal de la vista del vendedor. Orquesta la IA y las métricas. |
| **Styling Core**| `src/app/globals.css` | Define los tokens de diseño (colores, sombras, efectos glass) que definen la marca. |

## 2. Flujo de Ejecución

1.  **Bootstrapping Inicial**: Next.js procesa el `layout.tsx` para establecer el marco visual y SEO.
2.  **Carga de Identidad**: Se inyectan las variables CSS de `globals.css` que configuran el "look & feel" de Mercado Libre.
3.  **Montaje de Componentes**:
    - El `Navbar` se renderiza para proporcionar contexto de navegación.
    - La `page.tsx` despliega dinámicamente las tarjetas de métricas, el gráfico de ventas y el módulo del AI Advisor.
4.  **Activación de Interactividad**: Se disparan las animaciones de Framer Motion y se inicializan los gráficos de Recharts.

## 3. Configuraciones Críticas

- **Branding**: El `Navbar` centraliza el logotipo y la experiencia de búsqueda global.
- **AI Logic**: Los umbrales que activan las sugerencias de la IA se encuentran definidos directamente dentro de la página principal para esta fase de prototipo.
