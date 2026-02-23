---
description: "Analiza la arquitectura y el stack tecnológico de un proyecto desconocido (Enfoque Arqueólogo)."
---

Este workflow está diseñado para realizar una ingeniería inversa rápida de un proyecto y generar documentación técnica de alto nivel.

### 1. Exploración Inicial
- Ejecuta `list_dir` en la raíz del proyecto para identificar la estructura general.
- Identifica archivos de manifiesto: `package.json`, `go.mod`, `pom.xml`, `requirements.txt`, `composer.json`, etc.
- Identifica archivos de configuración: `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `.env.example`, `Docker/Dockerfile`.

### 2. Análisis del Stack Tecnológico
- Lee el archivo de manifiesto principal identificado.
- Extrae y resume:
    - **Lenguaje y Versión**: (ej. TypeScript 5, Python 3.12).
    - **Framework Core**: (ej. Next.js, Express, Django, Spring Boot).
    - **Librerías Críticas**: (ej. Prisma, Redux, React Query, Gorm).
    - **Scripts de Ejecución**: Identifica cómo se levanta y se testea la app.

### 3. Mapeo de la Anatomía del Proyecto
- Inspecciona las carpetas de `src` o raíz (hasta nivel 2 de profundidad).
- Deduce el patrón arquitectónico (ej. Limpia, Hexagonal, MVC o Monolito estructurado).
- Identifica los "Entry Points" (ej. `src/main.ts`, `app/page.tsx`, `server.js`).

### 4. Generación de Documentación
- Crea o actualiza el archivo `docs/AUTODOC_ARCHITECTURE.md`.
- El documento debe incluir:
    - **Tech Stack Overview**: Tabla con tecnologías clave.
    - **Architecture Diagram (Mermaid)**: Un diagrama de bloques o grafo (usando sintaxis `mermaid`) que visualice la relación entre componentes, páginas y el flujo de datos/estilos.
    - **Project Structure**: Árbol de directorios anotado con el propósito de cada carpeta (debe estar dentro de un bloque de código ```text para evitar colapsos de línea).
    - **Quick Start**: Basado en los scripts encontrados.
- **Nota de Estilo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética profesional y limpia.

### 5. Resumen de Hallazgos
- Proporciona un breve resumen en el chat sobre los puntos más sorprendentes o importantes encontrados en la arqueología del código.
