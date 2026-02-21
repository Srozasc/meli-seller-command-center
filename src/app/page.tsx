"use client";

import { TrendingUp, Award, Box, Zap, AlertTriangle } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import SalesChart from '@/components/SalesChart';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-gray-800">Panel de Control</h1>
        <p className="text-gray-500 font-medium">¡Hola! Aquí tienes un resumen de hoy en tu tienda.</p>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Ventas de hoy"
          value="$45,210"
          change="+12.5%"
          icon={TrendingUp}
          color="#3483FA"
        />
        <MetricCard
          title="Reputación"
          value="Platinium"
          icon={Award}
          color="#00A650"
        />
        <MetricCard
          title="Stock Crítico"
          value="4 skus"
          change="-2 piezas"
          icon={Box}
          color="#FF7733"
        />
        <MetricCard
          title="Mercado Envíos"
          value="98%"
          change="+2%"
          icon={Zap}
          color="#FFE600"
        />
      </div>

      {/* AI Advisor Section */}
      <div className="glass-card p-8 border-l-4 border-blue-600 bg-blue-50/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 rounded-full text-white">
            <Zap size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">AI Advisor</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed">
              Detecté que el producto <span className="font-bold">"Auriculares Wireless XYZ"</span> tiene una tendencia de subida del 30% para este fin de semana.
            </p>
            <p className="text-blue-700 font-semibold mt-2">
              Recomendación: Incrementar stock en FULL en 50 unidades hoy.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold transition-all shadow-md hover:shadow-lg">
            Sugerir Envío a Full
          </button>
        </div>
      </div>

      {/* Main Content Area (Placeholder for Graphs) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 min-h-[400px]">
          <SalesChart />
        </div>
        <div className="glass-card p-6">
          <h3 className="font-bold text-gray-800 mb-6">Alertas de Stock</h3>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Producto {i}</p>
                  <p className="text-xs text-gray-500">Quedan pocas unidades</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
