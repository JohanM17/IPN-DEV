# IPN DEV - Sistema de Gestión de Inventario

Sistema integral para la gestión de inventario, desarrollado como proyecto académico para el V semestre de Ingeniería de Software e Ingeniería Industrial.

---

## 📂 Estructura del Proyecto

Este es un monorepo que contiene tanto el cliente como el servidor:

IPN-DEV/
├── .agents/      # Desarrollo con IA y contexto de proyecto
├── frontend/     # Aplicación Next.js (React)
├── backend/      # API Laravel (PHP)
├── .gitignore    # Reglas de exclusión para Git
└── README.md     # Documentación principal


---

## 🚀 Guía de Inicio

Para comenzar a trabajar en el proyecto localmente, sigue estos pasos:

### 💻 Frontend (Next.js)
1. Navega a la carpeta: `cd frontend`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### ⚙️ Backend (Laravel)
1. Navega a la carpeta: `cd backend`
2. Instala las dependencias de PHP: `composer install`
3. Copia el archivo de entorno: `cp .env.example .env`
4. Genera la clave de la aplicación: `php artisan key:generate`
5. Inicia el servidor: `php artisan serve`

---

## 🌿 Estrategia de Ramas (Git Flow)

Para mantener el orden en el desarrollo, utilizaremos el siguiente esquema de ramas:

- `main`: Código estable y listo para producción. 
- `develop`: Rama de integración para nuevas funcionalidades.
- `feature/IPN-X`: Ramas temporales para tareas específicas (ej: `feature/IPN-10-login`).

> [!IMPORTANT]
> Está prohibido hacer merges directos a `main` sin revisión previa. Los cambios deben integrarse primero en `develop`.

---

## 👥 Equipo de Desarrollo (IPN DEV)

Integrantes:

1. Brandon Ortiz
2. Carlos Aranzasu
3. Johan Molina
4. Manuel Jose Muñoz
5. Miguel Aranzasu
6. Sofia Giraldo

---

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

## Tecnologías Utilizadas

Frontend:
- React
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Vercel

Backend:
- PHP
- Laravel
- PostgreSQL
- Postman