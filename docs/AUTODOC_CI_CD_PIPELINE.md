# AUTODOC: CI/CD Pipeline (Flujo de Entrega)

Descripción del proceso de automatización desde el desarrollo hasta la producción.

## 1. Diagrama del Pipeline

```mermaid
graph LR
    Push((Git Push)) --> CI[CI: Lint & Test]
    CI -- Pass --> Build[Next.js Build]
    Build -- Pass --> Vercel[Vercel Deployment]
    Vercel --> Online((Sistema Online))
    
    style Push fill:#ffffff,stroke:#333,color:#333
    style CI fill:#f5f5f5,stroke:#9e9e9e,color:#333
    style Build fill:#fffde7,stroke:#fbc02d,color:#333
    style Vercel fill:#f5f5f5,stroke:#9e9e9e,color:#333
    style Online fill:#e1f5fe,stroke:#3483fa,color:#333
```

## 2. Fases del Flujo

### Fase 1: Integración (CI)
Ejecución de auditorías estáticas (ESLint) para garantizar calidad de código.

### Fase 2: Construcción (Build)
Compilación de TypeScript y generación de assets optimizados para Next.js.

### Fase 3: Despliegue (CD)
Actualización automática de servidores edge mediante Vercel (CD).

---

## 3. Criterios de Éxito
Solo el código que pasa todas las validaciones de tipos y estilo es desplegado al entorno de producción.
