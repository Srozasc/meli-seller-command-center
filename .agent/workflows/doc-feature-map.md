---
description: "Relaciona componentes técnicos con capacidades de negocio (Features)."
---

Este workflow actúa como un puente entre el código y el catálogo de funcionalidades del producto.

### 1. Inventario de Componentes
- Lista los archivos en `src/components` y `src/app`.
- Analiza la metadata y comentarios de los archivos para entender su intención.

### 2. Mapeo a Valor
- Asocia cada componente o grupo de archivos con una "Feature" de cara al usuario final.
- Describe el beneficio que aporta ese componente al negocio.

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_FEATURE_MAP.md`.
- El documento debe incluir:
    - **Mapa de Capacidades**: Una relación clara entre el nombre del archivo y el nombre comercial/funcional de la característica.
    - **Estado de Implementación**: Nota sobre si la feature es puramente visual o tiene lógica compleja.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Proporciona una visión general de qué "problemas" del usuario resuelve el software.
