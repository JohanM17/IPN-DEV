"use client";

import LoginForm from "./LoginForm";

/**
 * Columna derecha: Tarjeta de login con figura decorativa interna
 */
export default function LoginRight() {
  return (
    <div className="relative flex items-center justify-center w-full lg:w-1/2 h-full overflow-hidden">
      
      {/* Contenedor de la Tarjeta */}
      <div className="relative z-10 w-full max-w-[550px] px-8 animate-fade" style={{ animationDelay: '0.1s' }}>
        
        <div className="bg-white p-12 lg:p-16 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col items-center relative overflow-hidden">
          
          {/* Figura decorativa INTERNA de la tarjeta */}
          <div className="card-internal-shape"></div>

          {/* Espacio para el Logo */}
          <div className="w-28 h-28 mb-8 relative flex items-center justify-center z-10">
            {/* Círculo decorativo */}
            <div className="absolute inset-0 rounded-full border-[3px] border-slate-100"></div>
            <div className="absolute inset-0 rounded-full border-t-[3px] border-r-[3px] border-[var(--primary)] rotate-[30deg]"></div>
            
            <div className="z-10 text-slate-300 text-[11px] font-black text-center leading-tight">
              IPN<br/>LOGO
            </div>
          </div>

          <h2 className="text-3xl font-black text-[var(--text-main)] tracking-tight z-10">Iniciar sesión</h2>
          <p className="text-base text-[var(--text-muted)] mt-3 text-center z-10">Ingresa tus credenciales para continuar</p>

          {/* Formulario Modular */}
          <div className="w-full mt-10 z-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
