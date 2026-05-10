"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Definimos qué información va a compartir este Contexto
interface ThemeContextType {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Proveedor de Tema: Envuelve la aplicación para dar acceso al color global
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Color por defecto (el azul que elegimos)
  const [primaryColor, setPrimaryColor] = useState("#2563eb");

  // 1. Al cargar la app, buscamos si el usuario ya tenía un color guardado
  useEffect(() => {
    const savedColor = localStorage.getItem("app-primary-color");
    if (savedColor) {
      setPrimaryColor(savedColor);
      applyTheme(savedColor);
    }
  }, []);

  // 2. Función para aplicar el color a las variables CSS del :root
  const applyTheme = (color: string) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", color);
    
    // Creamos un "secundario" basado en el primario pero con transparencia
    // Esto hace que las figuras decorativas siempre combinen
    root.style.setProperty("--secondary", `${color}cc`); // Color con 80% opacidad
    
    localStorage.setItem("app-primary-color", color);
  };

  // 3. Cada vez que el estado 'primaryColor' cambie, ejecutamos la aplicación del tema
  const handleSetPrimaryColor = (color: string) => {
    setPrimaryColor(color);
    applyTheme(color);
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor: handleSetPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el tema fácilmente en cualquier componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  return context;
};
