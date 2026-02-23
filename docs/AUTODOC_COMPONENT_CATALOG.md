# AUTODOC: Component Catalog (Catálogo UI)

Inventario de componentes reutilizables que forman la interfaz del sistema.

## 1. Fichas de Componentes

### MetricCard
- **Ubicación**: `src/components/MetricCard.tsx`
- **Rol**: Visualización de KPIs dinámicos.
- **Características**: Soporta estados de éxito/alerta basados en tendencias y permite inyectar iconos de Lucide.

### SalesChart
- **Ubicación**: `src/components/SalesChart.tsx`
- **Rol**: Representación gráfica de la evolución temporal.
- **Tecnología**: Implementado con AreaChart de Recharts para una estética moderna y fluida.

### Navbar
- **Ubicación**: `src/components/Navbar.tsx`
- **Rol**: Componente estructural de navegación y búsqueda.
- **Diseño**: Implementa el lenguaje visual corporativo con un layout responsivo.

## 2. Guía de Reuso

Cualquier nuevo componente debe:
1.  Hacer uso de las variables definidas en `globals.css`.
2.  Mantener el tipado de TypeScript para sus props.
3.  Evitar la lógica de negocio pesada, delegándola a las páginas o servicios si es posible.
