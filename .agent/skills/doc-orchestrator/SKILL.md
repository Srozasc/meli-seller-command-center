---
name: doc-orchestrator
description: Use esta skill cuando el usuario pida documentar el proyecto, actualizar la documentación existente o necesite entender aspectos técnicos, de negocio u operativos del sistema. Esta skill es capaz de identificar y ejecutar los workflows apropiados (doc-*) para cumplir con la necesidad del usuario.
---

# Orquestador de Documentación (Doc Orchestrator)

## Objetivo
Analizar la intención del usuario respecto a la documentación del proyecto y ejecutar de forma autónoma los workflows necesarios (`.agent/workflows/doc-*`) para generar o actualizar los artefactos requeridos.

## Instrucciones

1. **Análisis de Intención**: Evalúa la petición del usuario para determinar qué "visión" o categoría de documentación necesita:
   - **Técnica / Arquitectura (Opción A)**: Si pide entender el código, dependencias, componentes o estructura.
     - Workflows: `doc-arqueologo`, `doc-puntos-entrada`, `doc-dependencias`, `doc-catalogo-componentes`.
   - **Negocio / Product Owner (Opción B)**: Si pide entender procesos, reglas de negocio, flujos de usuario o valor del producto.
     - Workflows: `doc-user-journeys`, `doc-business-rules`, `doc-feature-map`, `doc-ai-insights-model`, `doc-product-glossary`.
   - **DevOps / SRE (Opción C)**: Si pide entender despliegue, infraestructura, seguridad o salud del sistema.
     - Workflows: `doc-infra-inventory`, `doc-env-config`, `doc-cicd-pipeline`, `doc-runtime-health`, `doc-security-audit`.

2. **Selección de Workflows**:
   - Identifica el o los workflows específicos que cubren la petición.
   - Si el usuario pide "documentar todo", ejecuta las tres opciones secuencialmente.

3. **Ejecución Procedimental**:
   - Lee el contenido del workflow seleccionado en `.agent/workflows/`.
   - Ejecuta los pasos descritos en el workflow utilizando las herramientas disponibles (list_dir, view_file, grep_search, write_to_file, etc.).
   - Sigue estrictamente las **Instrucciones de Estilo** de cada workflow (estética profesional, sin emojis innecesarios).

4. **Persistencia y Sincronización**:
   - Asegúrate de guardar los cambios en la carpeta `docs/`.
   - Tras completar la generación, ofrece al usuario subir los cambios a GitHub.

## Ejemplos

- **Usuario**: "Necesito entender cómo se despliega la app y qué APIs externas usamos."
  - **Acción**: Ejecuta `doc-cicd-pipeline` y `doc-infra-inventory`.
- **Usuario**: "Documenta las reglas de negocio y el glosario para el cliente."
  - **Acción**: Ejecuta `doc-business-rules` y `doc-product-glossary`.
- **Usuario**: "Haz una radiografía técnica completa del proyecto."
  - **Acción**: Ejecuta todos los workflows de la Opción A.

## Restricciones
- No copies las "Instrucciones de Estilo" o notas internas dentro de los archivos de documentación finales.
- No inventes información; si un recurso no es detectable, documéntalo como "Pendiente de configuración" o "No detectado".
