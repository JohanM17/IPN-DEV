"use client";

import { Sun } from "lucide-react";

/**
 * Columna izquierda: Información y branding (Ajustada: más grande y más arriba)
 */
export default function LoginLeft() {
  return (
    <div className="relative hidden lg:flex flex-col justify-start pt-32 px-24 w-1/2 h-full z-10">
      
      <div className="animate-fade">
        <p className="text-sm font-bold tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4">
          Sistema de Inventario
        </p>
        <h1 className="text-8xl font-black text-[var(--text-main)] mb-6 tracking-tighter">
          Bienvenido
        </h1>
        <div className="w-24 h-2 bg-[var(--primary)] rounded-full mb-10"></div>
        
        <p className="max-w-lg text-xl text-[var(--text-muted)] leading-relaxed">
          Inicia sesión para acceder a tu sistema de inventario y gestionar tu negocio de manera eficiente.
        </p>
      </div>

      {/* Triángulo decorativo subido */}
      <div className="shape-left-bottom"></div>

      {/* Theme Switcher - Más grande y distribuido */}
      <div className="absolute bottom-16 left-24 flex items-center gap-5 py-4 px-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:shadow-md cursor-pointer group">
        <Sun size={24} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
        <span className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">Cambiar tema</span>
        <div className="w-14 h-7 bg-slate-200 rounded-full relative p-1 transition-colors group-hover:bg-blue-100">
          <div className="absolute right-1 top-1 w-5 h-5 bg-[var(--primary)] rounded-full shadow-sm"></div>
        </div>
      </div>
    </div>
  );
}
