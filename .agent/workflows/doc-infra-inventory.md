---
description: "Identifica y cataloga recursos de infraestructura como APIs externas y servicios de terceros."
---

Este workflow escanea el código para identificar las dependencias de infraestructura y servicios externos que sostienen la aplicación.

### 1. Detección de Servicios
- Busca URLs de APIs externas en archivos de configuración y servicios.
- Identifica drivers de base de datos o clientes de servicios cloud (ej. AWS SDK, Supabase, Prisma configs).

### 2. Análisis de Integración
- Determina el rol de cada servicio externo (ej. "Pasarela de Pagos", "Autenticación", "Storage").
- Identifica los puntos de contacto en el código para cada recurso.

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_INFRA_INVENTORY.md`.
- El documento debe incluir:
    - **Inventario de Recursos**: Tabla con nombre, proveedor, tipo y propósito del recurso.
    - **Dependencias Críticas**: Nota sobre qué servicios son bloqueantes para la operación.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Informa sobre la complejidad del ecosistema de infraestructura del proyecto.
