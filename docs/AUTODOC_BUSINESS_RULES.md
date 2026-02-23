# AUTODOC: Business Rules (Reglas de Negocio)

Este documento traduce la lógica técnica del código a políticas de negocio funcionales y gobernadas.

## 1. Tabla de Reglas de Negocio

| Dominio | Condición Técnica | Regla de Negocio (Pólitica) |
| :--- | :--- | :--- |
| **UX / UI** | `change.startsWith('+')` | Los incrementos en indicadores clave deben resaltarse visualmente en verde. |
| **UX / UI** | `!change.startsWith('+')` | Los decrementos o alertas de caída deben resaltarse visualmente en rojo. |
| **Inversión** | `tendencia_subida > 0.30`| Un crecimiento proyectado mayor al 30% activa la recomendación de logística Full. |
| **Fulfillment**| `stock_critico == true` | Un producto sin inventario suficiente dispara una alerta de alta prioridad en el panel. |
| **KPIs** | `ventas_hoy` | El sistema debe mostrar el acumulado transaccional diario como métrica financiera principal. |

## 2. Definiciones de Niveles de Servicio

- **Reputación Platinium**: Estatus máximo otorgado por el sistema de confianza, representado como la métrica de éxito principal del dashboard.
- **Eficiencia Logística**: El sistema establece un umbral objetivo del 98% de efectividad en envíos para mantener la salud de la tienda.
- **Run-rate de Stock**: Cálculo basado en la velocidad de venta actual vs inventario disponible para predecir el día de quiebre de stock.

---

## 3. Gobernanza
La lógica de estas reglas reside actualmente en la orquestación de la página principal (`page.tsx`) y los componentes de visualización (`MetricCard.tsx`), asegurando que el negocio y la interfaz estén alineados.
