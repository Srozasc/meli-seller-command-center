---
description: "Analiza y documenta el contrato de variables de entorno y configuración."
---

Este workflow mapea los requisitos de configuración necesarios para que la aplicación arranque y funcione en diferentes entornos.

### 1. Extracción de Variables
- Lee archivos `.env.example`, `.env.local` y configuraciones de CI.
- Busca accesos a `process.env` o equivalentes en el código fuente.

### 2. Clasificación de Configuración
- Clasifica las variables en categorías (ej. "Base de Datos", "APIs", "Secretos").
- Identifica si la variable es requerida en tiempo de construcción (build) o de ejecución (runtime).

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_ENVIRONMENT_CONFIG.md`.
- El documento debe incluir:
    - **Tabla de Variables**: Nombre, propósito, valor por defecto (si es público) y obligatoriedad.
    - **Guía de Configuración**: Instrucciones para configurar un nuevo entorno de desarrollo o producción.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Indica si hay riesgos de configuración (ej. variables faltantes en el ejemplo) detectados.
