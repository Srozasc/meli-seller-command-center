# AUTODOC: Feature Map (Mapa de Capacidades)

Este documento relaciona los componentes técnicos del proyecto con las funcionalidades de negocio que percibe el usuario final.

## 1. Mapa de Capacidades

| Componente Técnico | Capacidad de Negocio | Beneficio para el Usuario | Estado |
| :--- | :--- | :--- | :--- |
| `src/app/page.tsx` (AI Section) | **AI Advisor** | Recibir recomendaciones predictivas para optimizar stock y logística. | Funcional (Demo) |
| `src/components/MetricCard.tsx` | **Panel de KPIs Críticos** | Monitorear en tiempo real ventas, reputación y eficiencia en envíos. | Funcional |
| `src/components/SalesChart.tsx` | **Analítica Proyectiva** | Visualizar tendencias históricas para entender el comportamiento de la demanda. | Funcional |
| `src/app/page.tsx` (Alerts) | **Monitoreo de Stock Crítico** | Identificar riesgos de "quiebre de stock" antes de perder ventas. | Funcional |
| `src/components/Navbar.tsx` | **Búsqueda y Acceso Global** | Navegar rápidamente entre herramientas y buscar productos en el catálogo. | Estructural |
| `src/app/layout.tsx` | **Experiencia Unificada** | Mantener una interfaz consistente con la identidad de marca local. | Estructural |

---

## 2. Definición Funcional de Features

### AI Advisor (Asesor Inteligente)
Es la característica diferencial del producto. Utiliza la lógica de detección de tendencias para automatizar la decisión logística del vendedor, sugiriendo envíos a centros de distribución de forma estratégica.

### KPI Dashboard (Panel de Control)
Transforma datos crudos de la tienda en indicadores accionables. Se enfoca en las 4 dimensiones clave de un vendedor exitoso: Finanzas, Confianza, Inventario y Logística.

### Sales Analytics (Analítica de Ventas)
Proporciona una capa visual de profundidad para entender los ciclos de venta semanales, permitiendo al vendedor planificar sus picos de operación.

---

## 3. Resumen de Valor

El software resuelve tres problemas fundamentales del vendedor:
- **Incertidumbre**: Mediante el AI Advisor que predice necesidades de stock.
- **Dispersión**: Centralizando todas las métricas críticas en una sola vista.
- **Fricción**: Proporcionando una interfaz intuitiva que no requiere capacitación.
