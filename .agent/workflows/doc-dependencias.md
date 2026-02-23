---
description: "Analiza el ecosistema de dependencias y librerías del proyecto."
---

Este workflow desglosa el stack tecnológico para entender las herramientas que sostienen la aplicación.

### 1. Extracción de Datos
- Lee los manifiestos de dependencias (`package.json`, `requirements.txt`, `go.mod`, etc.).
- Identifica tanto dependencias de producción como de desarrollo.

### 2. Categorización Técnica
- Agrupa las librerías encontradas en categorías lógicas:
    - **Core**: Frameworks base.
    - **UI/UX**: Estilos, iconos, animaciones.
    - **Data**: Gestión de estado, visualización, DB.
    - **DevOps/Quality**: Lints, tests, build tools.

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_DEPENDENCIES.md`.
- El documento debe incluir:
    - **Inventario por Categoría**: Tabla o lista detallando versión y rol de cada librería.
    - **Análisis de Mantenibilidad**: Nota sobre la modernidad de las versiones encontradas.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Informa sobre el "peso" tecnológico del proyecto y si hay piezas críticas que el desarrollador deba conocer detalladamente.
