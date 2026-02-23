---
description: "Reconstruye y documenta el flujo de integración y despliegue continuo (CI/CD)."
---

Este workflow visualiza el pipeline de automatización que lleva el código desde el repositorio hasta los servidores de producción.

### 1. Análisis de Pipelines
- Escanea carpetas de CI/CD (ej. `.github/workflows`, `gitlab-ci.yml`, `vercel.json`).
- Identifica los pasos de automatización: Linting, Testing, Building y Deploying.

### 2. Modelado del Pipeline
- Reconstruye la secuencia de ejecución de los jobs y sus dependencias.
- Identifica los entornos de despliegue (Staging, Production).

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_CI_CD_PIPELINE.md`.
- El documento debe incluir:
    - **Diagrama del Pipeline (Mermaid)**: Visualización del flujo de automatización.
    - **Detalle de Etapas**: Descripción de qué ocurre en cada fase y los criterios de éxito.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.
- **Contraste en Diagramas**: Al usar Mermaid, define siempre el color de la fuente (`color:#...`) en los estilos (`style`) para garantizar la legibilidad sobre el fondo del nodo.

### 4. Resumen
- Resume el nivel de automatización y la robustez del proceso de entrega.
