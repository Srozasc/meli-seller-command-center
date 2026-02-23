---
description: "Documenta la lógica de recomendaciones y datos del motor de inteligencia artificial."
---

Este workflow analiza los componentes de IA para explicar cómo se generan los insights de asesoría.

### 1. Análisis del Flujo de Datos AI
- Identifica qué fuentes de datos alimentan el componente Advisor (ej. props de ventas, alertas de stock).
- Analiza las recomendaciones estáticas o dinámicas implementadas.

### 2. Explicación del Modelo
- Describe los criterios bajo los cuales la IA sugiere acciones al usuario.
- Detalla los umbrales de activación de las recomendaciones.

### 3. Generación de Documentación
- Crea o actualiza `docs/AUTODOC_AI_INSIGHTS_MODEL.md`.
- El documento debe incluir:
    - **Arquitectura del Advisor**: Diagrama (Mermaid) que muestre la entrada de datos -> proceso de decisión -> salida de recomendación.
    - **Catálogo de Insights**: Lista de recomendaciones posibles y su razón de ser.

### Instrucciones de Estilo (No incluir en el documento)
- **Profesionalismo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética limpia y técnica.

### 4. Resumen
- Explica el valor diferencial que aporta la inteligencia artificial al flujo de trabajo del vendedor.
