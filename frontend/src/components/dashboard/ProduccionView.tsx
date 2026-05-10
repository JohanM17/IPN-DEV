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
    <div className="space-y-6">

      <div className="rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 bg-white" />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}>
            <ChefHat size={30} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Panel de Producción</h1>
            <p className="text-sm mt-0.5 text-white/70">
              Bienvenido, <strong className="text-white">{sesion?.usuario.nombre}</strong>. Operación productiva y despachos.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tarjetas.map(({ titulo, valor, Icono, desc }) => (
          <div key={titulo} className="rounded-xl shadow-sm p-5 flex items-start gap-4 border"
            style={{ background: 'var(--bg-left)', borderColor: 'rgba(0,0,0,0.07)' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--bg-right)' }}>
              <Icono size={22} style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: 'var(--text-main)' }}>{valor}</div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-main)' }}>{titulo}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl shadow-sm p-6 border"
        style={{ background: 'var(--bg-left)', borderColor: 'rgba(0,0,0,0.07)' }}>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 rounded-full" style={{ background: 'var(--primary)' }} />
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>Módulos disponibles</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modulos.map(({ nombre, desc, Icono }) => (
            <div key={nombre}
              className="rounded-xl p-4 flex items-start gap-3 border opacity-50 cursor-not-allowed"
              style={{ background: 'var(--bg-right)', borderColor: 'rgba(0,0,0,0.07)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,0,0,0.06)' }}>
                <Icono size={18} style={{ color: 'var(--text-muted)' }} />
              </div>
              <div>
                <div className="font-medium text-sm flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                  {nombre}
                  <span className="text-xs px-1.5 py-0.5 rounded font-normal"
                    style={{ background: 'rgba(0,0,0,0.06)', color: 'var(--text-muted)' }}>Próximamente</span>
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl p-4 text-sm border"
        style={{ background: 'var(--bg-right)', borderColor: 'var(--primary)', color: 'var(--text-main)' }}>
        <strong>Rol: Jefe de Producción</strong> — Acceso a operaciones productivas y despachos.
        No puede crear usuarios ni acceder a reportes financieros.
      </div>
    </div>
  );
}
