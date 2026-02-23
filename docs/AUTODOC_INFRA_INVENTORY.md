# AUTODOC: Infra Inventory (Mapa de Recursos)

Inventario de servicios y dependencias de infraestructura del Seller Command Center.

## 1. Inventario de Recursos

| Recurso | Proveedor | Tipo | Propósito |
| :--- | :--- | :--- | :--- |
| **Hosting & Rendering** | Vercel | PaaS | Despliegue de la aplicación Next.js en el edge. |
| **Data Source** | Conceptual MeLi API | External API | Fuente de verdad para el estado de la cuenta del vendedor. |
| **Bases de Datos** | Mock Data Service | Internal | Servicio de datos simulados para prototipado rápido de IA. |
| **Fonts & Icons** | Google / Lucide | External Assets | Recursos de diseño y branding. |

## 2. Dependencias de Infraestructura Crítica
- **Fulfillment Engine**: El sistema depende de la disponibilidad de los servicios externos del marketplace para procesar las órdenes de "Envío a Full".
- **Calculated Analytics**: Los KPI se procesan en el lado del cliente (Client-side) para asegurar una respuesta instantánea sin sobrecargar la infraestructura de backend.
