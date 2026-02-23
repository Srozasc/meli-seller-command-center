---
description: "Identifica las rutas y acciones principales que un usuario puede realizar (User Journeys)."
---

Este workflow analiza las páginas y la interactividad para reconstruir los flujos de usuario desde una perspectiva funcional.

### 1. Rastreo de Rutas
- Escanea la carpeta `src/app` (u equivalente de ruteo) para identificar las vistas disponibles.
- Identifica botones, links y llamadas a la acción (CTAs) dentro de cada componente de página.

### 2. Modelado de Flujo
- Conecta las vistas identificadas en una secuencia lógica de pasos.
- Determina el objetivo de negocio de cada flujo (ej. "Gestión de Stock", "Análisis de Ventas").

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_USER_JOURNEYS.md`.
- El documento debe incluir:
    - **Mapa de Flujos (Mermaid)**: Un diagrama de flujo que visualice la transición entre estados o páginas.
    - **Descripción de Pasos**: Explicación en lenguaje sencillo de lo que ocurre en cada punto del camino.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.
- **Contraste en Diagramas**: Al usar Mermaid, define siempre el color de la fuente (`color:#...`) en los estilos (`style`) para garantizar la legibilidad sobre el fondo del nodo.

### 4. Resumen
- Indica al usuario cuáles son los caminos críticos que el software soporta actualmente.
