# AUTODOC: Environment Config (Configuración de Entorno)

Este documento define el contrato de configuración necesario para el correcto despliegue y ejecución del Seller Command Center.

## 1. Tabla de Variables de Entorno

| Variable | Propósito | Requerido | Entorno |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | URL base de la aplicación para redirecciones. | Opcional | Local/Prod |
| `NEXT_PUBLIC_API_URL` | Endpoint de la API de Mercado Libre (Mock o Real). | Opcional | Local/Prod |
| `NODE_ENV` | Define el modo de ejecución (development/production). | Automático | Todos |

## 2. Guía de Configuración

### Entorno de Desarrollo (Local)
1.  **Instalación**: Ejecutar `npm install` para preparar todas las dependencias.
2.  **Arranque**: Ejecutar `npm run dev` para iniciar el servidor en `localhost:3000`.
3.  **Configuración**: No se requieren variables de entorno críticas para la versión de laboratorio (Lab Edition).

### Entorno de Producción
1.  **Build**: La optimización se realiza mediante `npm run build`.
2.  **Deployment**: Automatizado mediante Vercel. Las variables se inyectan a través del panel de control de la plataforma de hosting.

---

## 3. Estado de Configuración
Actualmente, el sistema está diseñado para ser **"Zero Config"**, permitiendo que cualquier desarrollador clone el laboratorio y comience a trabajar sin dependencias de secretos o claves privadas, utilizando la lógica mockeada interna.
