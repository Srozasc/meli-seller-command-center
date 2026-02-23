# AUTODOC: Runtime Health (Salud del Sistema)

Este documento detalla la estrategia de observabilidad y monitoreo para asegurar el rendimiento óptimo del Seller Command Center en tiempo real.

## 1. Estrategia de Logging

### Eventos del Sistema
- **Client Logs**: Captura de interacciones críticas (ej. activación del AI Advisor) mediante `console` refinado.
- **Error Tracking**: Identificación de fallos de renderizado o excepciones de TypeScript.

## 2. Panel de Salud Operativa

### Core Web Vitals
El sistema monitorea automáticamente los indicadores de experiencia de usuario definidos por Next.js:

| Métrica | Propósito | Estado Objetivo |
| :--- | :--- | :--- |
| **LCP** | Velocidad de carga percibida. | < 2.5s |
| **FID** | Tiempo de respuesta a la interacción. | < 100ms |
| **CLS** | Estabilidad visual del diseño. | < 0.1 |

### Healthchecks
- **Status**: Al ser una aplicación servida vía CDN/Edge, la salud depende de la disponibilidad del proveedor (SLA 99.9%).
- **AI Engine Health**: Verificación de carga de componentes interactivos y scripts de animación (Framer Motion).

## 3. Resolución de Incidentes

En caso de degradación de performance:
1.  **Revisión de Build Logs**: Inspección de la consola de Vercel/Next.js para detectar errores de compilación.
2.  **Audit de Performance**: Ejecución de Lighthouse para identificar cuellos de botella en el renderizado de gráficos (SalesChart).
