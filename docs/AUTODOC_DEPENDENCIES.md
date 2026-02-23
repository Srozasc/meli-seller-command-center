# AUTODOC: Dependencies (Inventario Tecnológico)

Este documento desglosa el stack tecnológico del proyecto, organizando las herramientas por su función crítica en el sistema.

## 1. Inventario por Categoría

### Core Framework
| Librería | Versión | Rol |
| :--- | :--- | :--- |
| **Next.js** | `16.1.6` | Motor de ruteo y rendering (App Router). |
| **React** | `19.2.3` | Base para la construcción de la UI. |
| **TypeScript** | `^5` | Lenguaje principal con tipado estático. |

### UI & User Experience
| Librería | Versión | Rol |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^4` | Estilizado utility-first optimizado. |
| **Framer Motion** | `^12.34.3` | Orquestación de animaciones y micro-interacciones. |
| **Lucide React** | `^0.575.0` | Set de iconos vectoriales consistentes. |

### Data & Visualización
| Librería | Versión | Rol |
| :--- | :--- | :--- |
| **Recharts** | `^3.7.0` | Generación de gráficos reactivos y accesibles. |

### DevOps & Quality
| Librería | Versión | Rol |
| :--- | :--- | :--- |
| **ESLint** | `^9` | Análisis estático y mantenimiento de estándares. |
| **@tailwindcss/postcss**| `^4` | Procesamiento y optimización de estilos CSS. |

---

## 2. Análisis de Mantenibilidad

El proyecto se encuentra en un estado de alta modernidad. El uso de Next.js 16 y React 19 indica que el código está listo para las últimas optimizaciones de rendimiento. La adopción de Tailwind CSS v4 asegura un pipeline de estilos extremadamente ligero.

### Piezas Críticas para el Desarrollador
- **App Router (Next.js 16)**: Uso de Server Components para optimización de carga.
- **Framer Motion**: Vital para mantener la sensación premium de la marca.
- **Recharts**: Estándar para el panel de analíticas.
