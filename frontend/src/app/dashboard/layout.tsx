'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { obtenerSesion, limpiarSesion, logout, Usuario } from '@/lib/session';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const ETIQUETA_ROL: Record<string, string> = {
  administrador: 'Administrador',
  gerencia: 'Gerencia',
  jefe_produccion: 'Jefe de Producción',
  encargado_inventarios: 'Encargado de Inventarios',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cerrando, setCerrando] = useState(false);
  const [mostrarTema, setMostrarTema] = useState(false);

  useEffect(() => {
    const sesion = obtenerSesion();
    if (!sesion) {
      router.replace('/login');
      return;
    }
    setUsuario(sesion.usuario);
  }, [router]);

  async function handleLogout() {
    setCerrando(true);
    const sesion = obtenerSesion();
    if (sesion) await logout(sesion.token).catch(() => { });
    limpiarSesion();
    router.replace('/login');
  }

  if (!usuario) return null;

  return (
    <div className="min-h-screen overflow-y-auto" style={{ background: 'var(--bg-right)' }}>

      {/* Navbar */}
      <nav className="shadow-lg sticky top-0 z-50" style={{ background: 'var(--primary)' }}>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                style={{ background: 'var(--secondary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">IPN DEV</div>
                <div className="text-xs leading-tight text-white/60">Inventario</div>
              </div>
            </div>

            {/* Derecha: tema, rol, nombre, logout */}
            <div className="flex items-center gap-4">

              {/* Selector de tema */}
              <div className="relative">
                <button
                  onClick={() => setMostrarTema(v => !v)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all text-white/70 hover:text-white hover:bg-white/10"
                  title="Cambiar tema"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                </button>
                {mostrarTema && (
                  <div className="absolute right-0 top-10 z-50">
                    <ThemeSwitcher />
                  </div>
                )}
              </div>

              {/* Badge rol */}
              <span className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hidden sm:inline-block bg-white/10 border border-white/20">
                {ETIQUETA_ROL[usuario.rol] ?? usuario.rol}
              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                disabled={cerrando}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 text-sm font-bold text-white hover:bg-white/20 transition-all border border-white/20 disabled:opacity-50 group active:scale-95"
              >
                <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline uppercase tracking-widest text-[10px]">{cerrando ? 'Saliendo...' : 'Salir'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Franja decorativa */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary), var(--primary))' }} />

      {/* Contenido con figuras de fondo decorativas mejoradas (Estilo Login) */}
      <main className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 animate-fade relative z-10">
        
        {/* Figuras Decorativas de Fondo Dinámicas */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
          {/* Manchas de color difusas (Glow) */}
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20" 
            style={{ background: 'var(--primary)' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-15" 
            style={{ background: 'var(--secondary)' }} />
          <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full blur-[150px] opacity-10" 
            style={{ background: 'var(--primary)' }} />

          {/* Líneas y Figuras Geométricas Definidas */}
          <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] border-[1px] border-primary/10 rounded-full" />
          <div className="absolute top-[12%] right-[12%] w-[300px] h-[300px] border-[1px] border-primary/5 rounded-full" />
          
          <div className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] border-[1px] border-primary/10 rotate-45" />
          <div className="absolute bottom-[18%] left-[7%] w-[250px] h-[250px] border-[1px] border-primary/5 rotate-[60deg]" />

          {/* Patrón de Grilla / Puntos más marcado */}
          <div className="absolute inset-0 opacity-[0.05]" 
            style={{ 
              backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
              backgroundSize: '100px 100px' 
            }} />
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{ 
              backgroundImage: `radial-gradient(circle, var(--primary) 2px, transparent 2px)`,
              backgroundSize: '30px 30px' 
            }} />
        </div>

        {children}
      </main>
    </div>
  );
}
