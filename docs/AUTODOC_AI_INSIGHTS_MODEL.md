# AUTODOC: AI Insights Model (Lógica del Asesor)

Detalle de funcionamiento del motor de inteligencia artificial del Seller Command Center.

## 1. Arquitectura del Advisor

```mermaid
graph LR
    subgraph Data_Inputs [Entrada]
        V[Ventas Reales]
        T[Tendencias Mercado]
        S[Estado Stock]
    end
    
    subgraph Engine [Proceso de Decisión]
        D{Lógica de Umbrales}
        D -- Tendencia > 30% --> R1[Recomendación Full]
        D -- Inventario Bajo --> R2[Alerta Reposición]
    end
    
    subgraph UI_Output [Salida]
        R1 --> Insight[Card: Sugerir Envío a Full]
    end

    style Data_Inputs fill:#f5f5f5,stroke:#9e9e9e,color:#333
    style Engine fill:#fff7d1,stroke:#ffe600,color:#333
    style UI_Output fill:#e1f5fe,stroke:#3483fa,color:#333
    style V color:#333
    style T color:#333
    style S color:#333
    style D color:#333
    style R1 color:#333
    style R2 color:#333
    style Insight color:#333
```

## 2. Definición del Modelo

### Criterios de Activación
- **Oportunidad**: Tendencia de demanda > 30% dispara sugerencia de modelo FULL.
- **Riesgo**: Ratio ventas/stock bajo genera alertas de reposición inmediata.

## 3. Catálogo de Recomendaciones
- **Sugerencia de Envío a Full**: Maximiza exposición y eficiencia logística.
- **Alertas de Stock Crítico**: Protege la continuidad de las ventas y la reputación.
