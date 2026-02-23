# AUTODOC: Environment Config (Configuración de Entorno)

Contrato de variables de entorno y requisitos para el despliegue del sistema.

## 1. Variables de Configuración

| Variable | Descripción | Entorno | Obligatorio |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | Modo de ejecución (development/production). | Todos | Sí |
| `NEXT_PUBLIC_BASE_URL` | URL base para la resolución de rutas relativas. | Producción | No |

## 2. Guía de Configuración Rápida

### Entorno Local
- **Boot**: `npm run dev`.
- **Pre-requisito**: Tener instalado Node.js v20+ y npm.
- **Configuración**: El proyecto está optimizado como "Libre de Configuración" para agilizar el desarrollo inicial.

### Entorno de Producción
- El despliegue está automatizado mediante la integración de **Vercel + GitHub**, inyectando automáticamente las variables de compilación necesarias para Next.js.
