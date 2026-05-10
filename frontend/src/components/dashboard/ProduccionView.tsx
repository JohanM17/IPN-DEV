'use client';

import { Flame, Truck, Cookie, AlertTriangle, ChefHat, Package, Clock } from 'lucide-react';
import { obtenerSesion } from '@/lib/session';

const tarjetas = [
  { titulo: 'Órdenes activas', valor: '—', Icono: Flame,         desc: 'Próximo módulo' },
  { titulo: 'Despachos hoy',   valor: '—', Icono: Truck,         desc: 'Próximo módulo' },
  { titulo: 'En producción',   valor: '—', Icono: Cookie,        desc: 'Próximo módulo' },
  { titulo: 'Insumos bajos',   valor: '—', Icono: AlertTriangle, desc: 'Próximo módulo' },
];

const modulos = [
  { nombre: 'Órdenes de Producción', desc: 'Gestión y seguimiento de órdenes activas', Icono: Flame   },
  { nombre: 'Despachos',             desc: 'Registro y control de despachos diarios',   Icono: Truck   },
  { nombre: 'Insumos y Materiales',  desc: 'Control de ingredientes para producción',   Icono: Package },
  { nombre: 'Turnos',                desc: 'Programación y control de turnos',           Icono: Clock   },
];

export default function ProduccionView() {
  const sesion = obtenerSesion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* COLUMNA IZQUIERDA: Principal (8 de 12 columnas) */}
      <div className="lg:col-span-8 space-y-10">
        
        {/* Banner */}
        <div className="rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-white -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
              <ChefHat size={45} className="text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black tracking-tight">Panel de Producción</h1>
              <p className="text-lg mt-1 text-white/80 font-medium">
                Bienvenido, <span className="text-white underline decoration-secondary decoration-2 underline-offset-4">{sesion?.usuario.nombre}</span>
              </p>
              <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20">Operación Activa</span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20">Despachos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Módulos */}
        <div className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 border border-slate-100"
          style={{ background: 'var(--bg-left)' }}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-7 rounded-full" style={{ background: 'var(--primary)' }} />
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>Módulos Disponibles</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modulos.map(({ nombre, desc, Icono }) => (
              <div key={nombre}
                className="group rounded-2xl p-5 flex items-center gap-4 border border-rgba(0,0,0,0.03) opacity-60 cursor-not-allowed transition-all duration-300"
                style={{ background: 'var(--bg-right)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-100"
                  style={{ opacity: 0.6 }}>
                  <Icono size={26} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-base flex items-center justify-between" style={{ color: 'var(--text-main)' }}>
                    {nombre}
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-400">
                      Soon
                    </span>
                  </div>
                  <div className="text-sm mt-0.5 line-clamp-1" style={{ color: 'var(--text-muted)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA: Sidebar (4 de 12 columnas) */}
      <div className="lg:col-span-4 space-y-8">
        
        {/* Métricas Verticales */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 px-2">Estado de Planta</h3>
          {tarjetas.map(({ titulo, valor, Icono, desc }) => (
            <div key={titulo} className="rounded-2xl shadow-sm p-6 flex items-center gap-5 border group transition-all hover:bg-white"
              style={{ background: 'var(--bg-left)', borderColor: 'rgba(0,0,0,0.05)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12"
                style={{ background: 'var(--bg-right)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
                <Icono size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>{titulo}</div>
                <div className="text-2xl font-black mt-0.5" style={{ color: 'var(--text-main)' }}>{valor}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="rounded-3xl p-8 border relative overflow-hidden"
          style={{ background: 'var(--bg-right)', borderColor: 'var(--primary)' }}>
          <div className="absolute -right-4 -bottom-4 opacity-5 text-[var(--primary)]">
            <Package size={120} />
          </div>
          <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--text-main)' }}>Resumen de Rol</h4>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Como <strong>Jefe de Producción</strong>, eres responsable de la eficiencia en planta, el control de 
            órdenes activas y la coordinación de despachos.
          </p>
          <button className="mt-6 w-full py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--primary)' }}>
            Nueva Orden
          </button>
        </div>
      </div>

    </div>
  );
}
