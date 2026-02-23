# AUTODOC: User Journeys (Flujos de Usuario)

Este documento describe las rutas críticas que un vendedor recorre dentro del Seller Command Center.

## 1. Mapa de Flujos Funcionales

```mermaid
graph TD
    Start((Inicio: App)) --> Dashboard[Panel de Control]
    
    Dashboard --> AI_Insight{AI Advisor: Detección}
    AI_Insight -- Tendencia detectada --> Suggestion[Sugerencia de Stock]
    Suggestion -- Click CTA --> Full_Action[Ejecutar Envío a Full]
    
    Dashboard --> Inventory_Alerts{Alertas de Stock}
    Inventory_Alerts -- Stock Crítico --> Detail_View[Revisión de Producto]
    
    Dashboard --> Persistent_Nav[Barra de Navegación]
    Persistent_Nav --> Search[Búsqueda Global]
    Persistent_Nav --> Notifications[Centro de Notificaciones]
    Persistent_Nav --> Selling[Flujo de Venta]

    style Start fill:#f9f9f9,stroke:#333,color:#333
    style Dashboard fill:#e1f5fe,stroke:#3483fa,color:#333
    style AI_Insight fill:#fff7d1,stroke:#ffe600,color:#333
    style Suggestion fill:#fff7d1,stroke:#ffe600,color:#333
    style Full_Action fill:#e8f5e9,stroke:#2e7d32,color:#333
    style Inventory_Alerts fill:#ffebee,stroke:#c62828,color:#333
    style Detail_View fill:#ffebee,stroke:#c62828,color:#333
    style Persistent_Nav fill:#f5f5f5,stroke:#9e9e9e,color:#333
```

## 2. Descripción de Rutas Críticas

### A. Flujo de Optimización Logística (Predictivo)
1. **Detección**: El motor de IA identifica SKUs con tendencia de crecimiento > 30%.
2. **Visualización**: Se presenta un insight proactivo en el área del "AI Advisor".
3. **Acción**: El usuario valida la sugerencia y dispara el proceso de envío a centros de distribución (Full).

### B. Monitoreo Táctico de Inventario
1. **Identificación**: El usuario detecta indicadores en rojo en la tarjeta de "Stock Crítico".
2. **Análisis**: Revisa la lista de alertas para priorizar la reposición de productos.

---

## 3. Resumen de Soporte Operativo
El software soporta actualmente un ciclo cerrado de **Detección -> Sugerencia -> Acción**, mitigando el riesgo de pérdida de ventas por quiebre de stock.
