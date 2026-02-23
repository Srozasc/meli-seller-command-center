---
description: "Documenta la estrategia de monitoreo, logs y salud del sistema en ejecución."
---

Este workflow identifica las herramientas y prácticas implementadas para asegurar la observabilidad del sistema.

### 1. Identificación de Observabilidad
- Busca implementaciones de logging (ej. Winston, Pino, console wrappers).
- Identifica integraciones de monitoreo o métricas (ej. Sentry, Datadog, Next.js Web Vitals).

### 2. Análisis de Salud
- Identifica los endpoints de salud (Healthchecks) si existen.
- Determina los indicadores clave de rendimiento (Core Web Vitals para aplicaciones web).

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_RUNTIME_HEALTH.md`.
- El documento debe incluir:
    - **Estrategia de Logging**: Cómo y dónde revisar los eventos del sistema.
    - **Panel de Salud**: Descripción de los indicadores que determinan si el sistema está operativo.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Evalúa la visibilidad que tiene el equipo de operaciones sobre la aplicación en vivo.
