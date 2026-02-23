---
description: "Analiza y documenta los puntos de entrada críticos del sistema (Entry Points)."
---

Este workflow identifica dónde comienza la ejecución y cómo se orquesta la aplicación.

### 1. Identificación de Puntos de Entrada
- Busca archivos raíz de ejecución según el stack:
    - Next.js: `src/app/layout.tsx`, `src/app/page.tsx`, `src/middleware.ts`.
    - Node/Express: `server.js`, `app.js`, `src/index.ts`.
    - Python: `main.py`, `app.py`, `wsgi.py`.
- Identifica archivos de configuración global que afecten la carga (ej. `globals.css`, `.env`).

### 2. Análisis de Responsabilidades
- Lee el contenido de los archivos identificados.
- Determina:
    - Qué componentes globales se montan (ej. Navbars, Context Providers).
    - Qué metadatos o configuraciones base se definen.
    - El flujo secuencial de carga (Bootstrapping).

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_ENTRY_POINTS.md`.
- El documento debe incluir:
    - **Lista de Entry Points**: Con su ubicación y rol técnico.
    - **Flujo de Carga**: Breve descripción de la secuencia de inicialización.
    - **Configuraciones Globales**: Detalle de estilos o variables de entorno críticas.
- **Nota de Estilo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética profesional y limpia.

### 4. Resumen
- Indica al usuario cuáles son los "archivos cerebro" del proyecto.
