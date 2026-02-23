# AUTODOC: Business Rules (Reglas de Negocio)

Este documento traduce la lógica condicional y las validaciones del código a políticas de negocio funcionales.

## 1. Tabla de Reglas de Negocio

| Dominio | Condición Técnica (Código) | Regla de Negocio (Funcional) |
| :--- | :--- | :--- |
| **Visualización** | `change.startsWith('+')` | Los incrementos en métricas deben resaltarse en verde (positivo). |
| **Visualización** | `!change.startsWith('+')` | Los decrementos en métricas deben resaltarse en rojo (negativo). |
| **Logística** | `tendencia_subida > 0.30` | Si un producto supera el 30% de tendencia positiva, el sistema debe recomendar un envío a Mercado Envíos Full. |
| **Inventario** | `stock_critico == true` | Los productos con bajo inventario deben disparar una alerta visual inmediata en el panel de notificaciones. |
| **Ventas** | `ventas_hoy` | El dashboard debe totalizar y mostrar el monto transaccionado en el día corriente de forma prioritaria. |

---

## 2. Definiciones de Estado y Niveles

El sistema utiliza los siguientes umbrales y categorías para definir el estado del vendedor:

- **Estatus de Reputación**: Se definen niveles de servicio (ej: "Platinium") que afectan la visibilidad del vendedor. Actualmente mapeado como una métrica de estatus fijo.
- **Eficiencia de Envío**: El sistema monitorea el porcentaje de efectividad de Mercado Envíos. Un valor del 98% se considera óptimo para mantener el estatus de la tienda.
- **Tendencia de Mercado**: Calculada comparando el volumen de ventas actual contra periodos anteriores para predecir necesidades de stock.

---

## 3. Gobernanza de Reglas

Actualmente, las fuentes de verdad de estas reglas se encuentran distribuidas en:
- **`src/app/page.tsx`**: Define los umbrales de recomendación de la IA y los estatus de reputación.
- **`src/components/MetricCard.tsx`**: Gobierna la lógica visual de representación de éxito o riesgo financiero.

---

## 4. Resumen de Políticas Críticas

La política más crítica implementada actualmente es la **Proactividad Logística**: El sistema no solo informa del estado del stock, sino que interviene cuando detecta una oportunidad de mercado (tendencia > 30%) para asegurar la disponibilidad del producto en los centros de distribución de Mercado Libre.

**Nota de Estilo**: Evitar el uso de iconos o emojis innecesarios en el documento final para mantener una estética profesional y limpia.
