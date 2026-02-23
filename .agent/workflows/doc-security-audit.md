---
description: "Resume las medidas de protección y la postura de seguridad del proyecto."
---

Este workflow realiza un inventario de las defensas y estándares de seguridad implementados en el código.

### 1. Auditoría de Seguridad
- Revisa headers de seguridad, políticas de CORS y configuraciones de sanitización.
- Analiza las reglas de ESLint o herramientas de análisis estático enfocadas en seguridad.

### 2. Análisis de Vulnerabilidades
- Realiza o lee reportes de auditoría de dependencias (`npm audit` o similares).
- Identifica el uso de prácticas seguras en el manejo de datos sensibles.

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_SECURITY_AUDIT.md`.
- El documento debe incluir:
    - **Inventario de Medidas**: Lista de protecciones activas.
    - **Estatus de Dependencias**: Resumen de vulnerabilidades conocidas en las librerías utilizadas.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Proporciona una visión sobre el nivel de seguridad y preparación ante amenazas del proyecto.
