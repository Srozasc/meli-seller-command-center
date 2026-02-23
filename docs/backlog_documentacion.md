# Backlog: Visiones de Documentación Automática (IA-First)

Este documento registra las visiones de documentación que retomaremos más adelante para expandir la Skill de Documentación Automática.

## Opción A: Foco en Desarrolladores (El Arqueólogo Digital) [En Curso]
**Propósito:** Deducir la intención y estructura técnica original de un proyecto para acelerar el "Onboarding".
- **Top-Down Discovery:** Analizar archivos de configuración (`package.json`, `tsconfig.json`, `pom.xml`, etc.) para entender el stack tecnológico.
- **Arquitectura de Alto Nivel:** Generar explicaciones sobre la organización del código (carpetas) y los puntos de entrada del sistema.
- **Diagramación As-Code:** Representar visualmente (vía Mermaid) la jerarquía de componentes y el flujo de datos.
- **Valor:** El desarrollador entiende el ecosistema completo en segundos, reduciendo la fricción en proyectos desconocidos.


## Opción B: Foco en Product Owners / Negocio
**Propósito:** Traducir código técnico a lenguaje funcional y de valor.
- **Flujos de Usuario (User Journeys):** Identificar las rutas y acciones principales que un usuario puede realizar.
- **Diccionario de Reglas de Negocio:** Extraer validaciones y lógica condicional crítica.
- **Mapa Funcional:** Relacionar componentes con "Features" del producto.

## Opción C: Foco en DevOps / SRE
**Propósito:** Facilitar la operación, escalabilidad y observabilidad.
- **Inventario de Infraestructura:** Identificar bases de datos, APIs externas y servicios de terceros.
- **Configuración y Entorno:** Documentar variables de entorno requeridas y archivos de config.
- **Pipeline de Entrega:** Reconstruir el flujo de build, test y deploy a partir de archivos de CI (GitHub Actions, Jenkins, etc.).
