# AUTODOC: Business Rules (Reglas de Negocio)

Este documento traduce la lógica condicional y las validaciones del código a políticas de negocio funcionales.

## 1. Tabla de Reglas de Negocio

| Dominio | Condición Técnica (Código) | Regla de Negocio (Funcional) |
| :--- | :--- | :--- |
| **Visualización** | `change.startsWith('+')` | Los incrementos en métricas de rendimiento deben resaltarse visualmente en verde. |
| **Visualización** | `!change.startsWith('+')` | Los decrementos o pérdidas en métricas deben resaltarse visualmente en rojo. |
| **Logística** | `tendencia_subida > 0.30` | Si la demanda de un producto crece por encima del 30%, el sistema debe recomendar el uso de Mercado Envíos Full. |
| **Inventario** | `stock_critico == true` | Los productos por debajo del umbral de seguridad deben generar alertas visuales de prioridad alta. |
| **Ventas** | `ventas_hoy` | El sistema debe priorizar y centralizar el volumen transaccionado del día calendario actual. |

---

## 2. Definiciones de Estado y Niveles

El sistema utiliza los siguientes umbrales operativos para definir el estatus del vendedor:

- **Estatus de Reputación**: Se definen niveles de servicio jerárquicos (ej. Platinium) que operan como indicadores de confianza para el comprador.
- **Eficiencia de Despacho**: El sistema monitorea la efectividad de Mercado Envíos, estableciendo una meta de calidad del 98% para mantener el estatus de la tienda.
- **Predicción de Tendencia**: Se calcula comparando el volumen de ventas en tiempo real contra promedios históricos para anticipar necesidades de almacenamiento.

---

## 3. Gobernanza de Reglas

Las fuentes de verdad para estas políticas están centralizadas en:
- **src/app/page.tsx**: Orquestación de umbrales para el asesor de inteligencia artificial.
- **src/components/MetricCard.tsx**: Lógica visual para la representación de éxito o riesgo financiero.

---

## 4. Resumen de Políticas Críticas

La política central del laboratorio es la **Optimización Proactiva**. El sistema está diseñado para pasar de un modelo reactivo (donde el vendedor espera el quiebre de stock) a un modelo predictivo, donde la detección de una tendencia del 30% activa automáticamente una sugerencia de acción logística estratégica para maximizar las ventas.
