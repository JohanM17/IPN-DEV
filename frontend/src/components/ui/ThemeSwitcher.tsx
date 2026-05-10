"use client";

import React, { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Palette, Sun } from "lucide-react";

// Colores predeterminados sugeridos
const PRESET_COLORS = [
  "#2563eb", // Azul Corporativo
  "#059669", // Verde Esmeralda
  "#ea580c", // Naranja Atardecer
  "#dc2626", // Rojo Vino
  "#7c3aed", // Violeta Moderno
];

/**
 * Componente Selector de Temas (Presets + Color Picker)
 */
export default function ThemeSwitcher() {
  const { primaryColor, setPrimaryColor } = useTheme();
  
  // Referencia al input de tipo color (oculto)
  const colorPickerRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-4 py-4 px-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-xl animate-fade" style={{ animationDelay: '0.4s' }}>
      
      <div className="flex items-center gap-3 mb-1">
        <Sun size={20} className="text-slate-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Personalizar Tema</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Círculos de colores predeterminados */}
        {PRESET_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setPrimaryColor(color)}
            className={`w-8 h-8 rounded-full transition-all hover:scale-110 active:scale-95 shadow-sm ${
              primaryColor === color ? "ring-2 ring-offset-2 ring-slate-300 scale-110" : ""
            }`}
            style={{ backgroundColor: color }}
            title={`Elegir color ${color}`}
          />
        ))}

        {/* Separador sutil */}
        <div className="w-px h-6 bg-slate-200 mx-1"></div>

        {/* Botón selector de color personalizado */}
        <button
          onClick={() => colorPickerRef.current?.click()}
          className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[var(--primary)] hover:bg-white hover:shadow-md transition-all border border-slate-100 group"
          title="Color personalizado"
        >
          <Palette size={20} className="group-hover:rotate-12 transition-transform" />
          
          {/* Input de color nativo oculto */}
          <input
            ref={colorPickerRef}
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="absolute opacity-0 w-0 h-0 pointer-events-none"
          />
        </button>
      </div>
    </div>
  );
}
