# AUTODOC: Infra Inventory (Mapa de Recursos)

Este documento cataloga los servicios externos y dependencias de infraestructura que sostienen la operación del Seller Command Center.

## 1. Inventario de Recursos

| Recurso | Proveedor | Tipo | Propósito |
| :--- | :--- | :--- | :--- |
| **Frontend Hosting** | Vercel | PaaS | Alojamiento de la aplicación Next.js y renderizado en el edge. |
| **API Marketplace** | Mercado Libre | External API | Fuente de datos para ventas, stock y reputación (Mapeo conceptual). |
| **Fonts Service** | Google Fonts | CDN | Suministro de tipografía corporativa (Inter/Outfit). |
| **Icon Assets** | Lucide | Library | Set de iconos vectoriales integrados en el bundle. |

## 2. Dependencias Críticas

### Conectividad Externas
- **Mercado Libre API**: El sistema depende de la disponibilidad de la API pública para la sincronización de datos en tiempo real.
- **Vercel Edge Network**: Crítico para la entrega de contenido con baja latencia y la ejecución de las rutas de Next.js.

### Persistencia y Datos
Actualmente, el laboratorio utiliza un modelo de **Datos Mockeados** integrado en el cliente para asegurar la estabilidad durante la fase de prototipado del AI Advisor. La transición a una base de datos persistente (ej. PostgreSQL) es el siguiente paso en el roadmap de infraestructura.
