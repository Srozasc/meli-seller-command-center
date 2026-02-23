# AUTODOC: Runtime Health (Salud del Sistema)

Estrategia de observabilidad y monitoreo para el mantenimiento de la salud operativa.

## 1. Indicadores de Salud (KPIs de SRE)

### Core Web Vitals (UX Health)
- **LCP (Largest Contentful Paint)**: Meta < 2s para una sensación de fluidez instantánea.
- **CLS (Cumulative Layout Shift)**: Meta < 0.1 para evitar saltos visuales durante la carga de gráficos.

### Estado del AI Advisor
- Monitoreo de la carga de scripts de inteligencia y lógica de tendencias para asegurar que las sugerencias proactivas se presenten siempre a tiempo.

## 2. Logs y Depuración
- El sistema utiliza los logs nativos de Next.js y Vercel para rastrear errores de renderizado o fallos en la lógica de hidratación de componentes en el cliente.
