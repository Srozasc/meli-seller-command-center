---
description: "Extrae validaciones y lógica condicional crítica como reglas de negocio."
---

Este workflow traduce el código técnico (`if/else`, validaciones) a reglas de negocio comprensibles para stakeholders.

### 1. Extracción de Lógica
- Escanea componentes y servicios buscando estructuras de control de flujo.
- Identifica validaciones de formularios, umbrales de alerta y cálculos de estado.

### 2. Traducción Funcional
- Convierte la sintaxis de programación a declaraciones de lenguaje natural.
- Agrupa las reglas por dominio de negocio (ej. Reputación, Logística, Alertas).

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_BUSINESS_RULES.md`.
- El documento debe incluir:
    - **Tabla de Reglas**: Columnas para "Condición Técnica" y "Regla de Negocio".
    - **Gobernanza**: Notas sobre dónde reside la fuente de verdad de estas reglas en el código.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Resalta las políticas de negocio más críticas que la aplicación está forzando actualmente.
