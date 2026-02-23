# AUTODOC: Component Catalog (Catálogo de Bloques UI)

Este documento mapea el sistema de componentes del proyecto, facilitando la reutilización de piezas de interfaz ya desarrolladas.

## 1. Fichas de Componentes

### `MetricCard`
- **Ubicación**: `src/components/MetricCard.tsx`
- **Responsabilidad**: Visualizar un KPI (Indicador Clave de Desempeño) con tendencia.

**Uso (Props):**

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | `string` | Nombre de la métrica. |
| `value` | `string \| number` | Valor actual a mostrar. |
| `change` | `string` (opcional) | Variación porcentual o numérica (ej: "+10%"). |
| `icon` | `LucideIcon` | Icono representativo de `lucide-react`. |
| `color` | `string` | Color hexadecimal para el acento visual del icono. |

- **Estado**: Puramente visual (stateless).
- **Dependencias**: `lucide-react`.

### `Navbar`
- **Ubicación**: `src/components/Navbar.tsx`
- **Responsabilidad**: Proporcionar el marco de identidad y navegación superior.
- **Características**: Incluye barra de búsqueda, sistema de notificaciones y shopping cart.
- **Estado**: Contiene estados locales de input (no expuestos vía props actualmente).
- **Dependencias**: `next/link`, `lucide-react`.

### `SalesChart`
- **Ubicación**: `src/components/SalesChart.tsx`
- **Responsabilidad**: Renderizar la evolución temporal de ventas mediante gráficos.
- **Características**: Responsivo, con tooltips y animaciones suaves.
- **Estado**: Componente de cliente (`"use client"`). Maneja datos locales para la demo.
- **Dependencias**: `recharts`.

---

## 2. Guía de Reuso

Para integrar estos componentes en nuevas pantallas del laboratorio:

1.  **Importación**: Usa el alias `@` definido en `tsconfig.json`.
    ```tsx
    import MetricCard from '@/components/MetricCard';
    ```
2.  **Consistencia**: Asegúrate de usar la paleta de colores definida en `globals.css` al pasar la prop `color` a los componentes que la requieran.
3.  **Composición**: Los componentes están diseñados para ser usados dentro de layouts de tipo `Grid` o `Flex` para mantener la responsividad.

---

### Potencial de Reutilización
- **`MetricCard`**: Alta. Puede usarse en cualquier panel que requiera mostrar datos numéricos rápidos.
- **`SalesChart`**: Media. Ideal para cualquier sección de analítica; se recomienda parametrizar la data en futuras iteraciones.
