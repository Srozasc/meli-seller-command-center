---
description: "Genera un inventario detallado de los componentes de UI reutilizables del proyecto."
---

Este workflow mapea el "Lego" del proyecto, identificando piezas listas para ser reutilizadas.

### 1. Escaneo de Componentes
- Lista los archivos en carpetas de componentes (ej. `src/components`, `src/ui`).
- Identifica componentes atómicos y compuestos.

### 2. Análisis de Interfaz
- Lee los archivos de los componentes más importantes.
- Extrae:
    - **Props/Parámetros**: Qué datos recibe el componente.
    - **Estado Interno**: Si es un componente interactivo o meramente visual.
    - **Dependencias**: Si usa librerías específicas (ej. Recharts, Framer Motion).

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_COMPONENT_CATALOG.md`.
- El documento debe incluir:
    - **Fichas de Componentes**: Nombre, ubicación, responsabilidad y guía rápida de uso (Props). Las tablas de props deben estar separadas por una línea en blanco del texto anterior para asegurar su visualización.
    - **Guía de Reuso**: Instrucciones generales sobre cómo añadir nuevos elementos al sistema.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Proporciona una lista rápida de los componentes con más potencial de reutilización.
