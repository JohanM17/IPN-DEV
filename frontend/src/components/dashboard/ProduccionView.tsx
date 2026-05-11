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
        <div className="rounded-xl p-10 text-white shadow-xl relative overflow-hidden group border-b-4 border-r-4 border-black/10"
          style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 border-8 border-white/5 rounded-full -mr-20 -mt-20" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)' }}>
              <ChefHat size={45} className="text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black tracking-tighter uppercase italic">Panel de Producción</h1>
              <p className="text-lg mt-1 text-white/80 font-medium">
                OPERACIÓN IPN-DEV <span className="mx-2 opacity-30">|</span> <span className="text-white">{sesion?.usuario.nombre}</span>
              </p>
              <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-black/20 border border-white/10">Activa</span>
                <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-black/20 border border-white/10">Planta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Módulos */}
        <div className="rounded-xl shadow-lg p-8 border-2 border-black/5"
          style={{ background: 'var(--bg-left)' }}>
          <div className="flex items-center justify-between mb-8 border-b-2 border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rotate-45" />
              <h2 className="text-2xl font-black uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>Módulos Disponibles</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modulos.map(({ nombre, desc, Icono }) => (
              <div key={nombre}
                className="group rounded-xl p-5 flex items-center gap-4 border-2 border-black/5 opacity-60 cursor-not-allowed transition-all duration-300"
                style={{ background: 'var(--bg-right)' }}>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-100/50"
                  style={{ opacity: 0.6 }}>
                  <Icono size={26} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-sm uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>
                    {nombre}
                    <span className="ml-2 text-[9px] uppercase tracking-tighter px-1.5 py-0.5 rounded bg-black/5 text-slate-400">
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
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-2">Estado de Planta</h3>
          {tarjetas.map(({ titulo, valor, Icono }) => (
            <div key={titulo} className="rounded-xl shadow-md p-6 flex items-center gap-5 border-2 border-black/5 group transition-all hover:translate-x-1"
              style={{ background: 'var(--bg-left)' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-white/50 shadow-inner"
                style={{ background: 'var(--bg-right)' }}>
                <Icono size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{titulo}</div>
                <div className="text-2xl font-black tracking-tighter mt-0.5" style={{ color: 'var(--text-main)' }}>{valor}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="rounded-xl p-8 border-2 relative overflow-hidden"
          style={{ background: 'var(--bg-right)', borderColor: 'var(--primary)' }}>
          <div className="absolute -right-8 -bottom-8 opacity-5 text-[var(--primary)] rotate-12">
            <Package size={160} />
          </div>
          <h4 className="font-black text-lg mb-3 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>Resumen de Rol</h4>
          <p className="text-xs leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
            Como <strong>Jefe de Producción</strong>, eres responsable de la eficiencia en planta, el control de 
            órdenes activas y la coordinación de despachos.
          </p>
          <button className="mt-6 w-full py-3 rounded-lg text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-opacity-90 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            style={{ background: 'var(--primary)' }}>
            Nueva Orden
          </button>
        </div>
      </div>

    </div>
  );
}
