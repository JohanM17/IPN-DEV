'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { obtenerSesion, limpiarSesion, logout, Usuario } from '@/lib/session';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const ETIQUETA_ROL: Record<string, string> = {
  administrador:         'Administrador',
  gerencia:              'Gerencia',
  jefe_produccion:       'Jefe de Producción',
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
    if (sesion) await logout(sesion.token).catch(() => {});
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
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
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                  </svg>
                </button>
                {mostrarTema && (
                  <div className="absolute right-0 top-10 z-50">
                    <ThemeSwitcher />
                  </div>
                )}
              </div>

              {/* Badge rol */}
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-white hidden sm:inline"
                style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
                {ETIQUETA_ROL[usuario.rol] ?? usuario.rol}
              </span>

              {/* Nombre */}
              <span className="text-sm text-white/80 hidden md:block">{usuario.nombre}</span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                disabled={cerrando}
                className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors disabled:opacity-50"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">{cerrando ? 'Saliendo...' : 'Salir'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Franja decorativa */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary), var(--primary))' }} />

      {/* Contenido */}
      <main className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 animate-fade">
        {children}
      </main>
    </div>
  );
}
