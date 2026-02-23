# AUTODOC: Component Catalog (Catálogo de Bloques UI)

Este documento mapea el sistema de componentes del proyecto, facilitando la reutilización de piezas de interfaz ya desarrolladas.

## 1. Fichas de Componentes

### MetricCard
- **Ubicación**: `src/components/MetricCard.tsx`
- **Responsabilidad**: Visualización atómica de Indicadores Clave de Desempeño (KPIs). Soporta variaciones de color y tendencias (positivo/negativo).

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | `string` | Nombre de la métrica. |
| `value` | `string` | Valor principal a mostrar. |
| `change` | `string(opt)` | Porcentaje de cambio (ej. "+12%"). |
| `icon` | `LucideIcon` | Icono representativo de la métrica. |
| `color` | `string` | Color hexadecimal para el acento visual. |

---

### Navbar
- **Ubicación**: `src/components/Navbar.tsx`
- **Responsabilidad**: Shell superior de navegación. Implementa el branding de Mercado Libre, búsqueda global y accesos rápidos de usuario.
- **Dependencias**: `lucide-react`, `next/link`.

---

### SalesChart
- **Ubicación**: `src/components/SalesChart.tsx`
- **Responsabilidad**: Visualización de series temporales de ventas utilizando gráficos de área. Implementa interactividad mediante Tooltips y Responsive Containers.
- **Tecnología**: Recharts (Componible).

---

## 2. Guía de Reuso

Para añadir un nuevo componente al catálogo:
1.  **Atomicidad**: Diseñar el componente para que cumpla una sola función (ej. un botón, una tarjeta).
2.  **Tokens**: Utilizar las variables de CSS de `globals.css` para mantener la consistencia visual de MeLi.
3.  **Documentación**: Actualizar este archivo con la tabla de props y responsabilidades.

---

### Potencial de Reutilización
- **MetricCard**: Alta. Puede usarse en cualquier panel que requiera mostrar datos numéricos rápidos.
- **SalesChart**: Media. Ideal para cualquier sección de analítica parametrizando la data.
