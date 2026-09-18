# Colegio Santo Tomás de Aquino — Frontend Web (Next.js)

Sitio web institucional y landings de captación del **Colegio Santo Tomás de Aquino (Padres Dominicos)**.  
Construido con **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4** y **TypeScript**.

---

## 1. Requisitos Previos

- **Node.js**: v20.x o superior.
- **Git** instalado.
- **Yarn**: Si no lo tienes instalado en tu PC, instálalo globalmente ejecutando:
  ```bash
  npm install --global yarn
  ```

---

## 2. Instalación y Ejecución Local

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd fe-web

# 2. Instalar Yarn (solo si no lo tienes)
npm install --global yarn

# 3. Instalar dependencias del proyecto
yarn install

# 4. Iniciar servidor de desarrollo
yarn dev
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 3. Arquitectura del Proyecto

El proyecto utiliza una arquitectura **Enterprise Feature-Driven** con **Route Groups**:

```text
fe-web/
├── public/                     # Imágenes, logos y favicon estáticos
│   └── images/
│       ├── logo-sta-footer.png # Logo oficial STA
│       └── orden-dominicana.png# Emblema Orden Dominicana
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz (Fuentes Geist, SEO global)
│   │   ├── not-found.tsx       # Página 404 personalizada
│   │   ├── sitemap.ts          # Sitemap XML automático para Google
│   │   ├── robots.ts           # robots.txt automático
│   │   ├── opengraph-image.tsx # Tarjeta para WhatsApp / Facebook
│   │   │
│   │   ├── (main)/             # 🔵 WEB INSTITUCIONAL (Header y Footer oficial)
│   │   │   ├── layout.tsx      # Inyecta <Header /> y <Footer />
│   │   │   ├── page.tsx        # Home del colegio (/)
│   │   │   ├── inicial/        # /inicial
│   │   │   ├── primaria/       # /primaria
│   │   │   ├── secundaria/     # /secundaria
│   │   │   └── nosotros/       # /nosotros
│   │   │
│   │   └── (landings)/         # 🟢 LANDINGS DE CAMPAÑA (Header mínimo + Conversión)
│   │       ├── layout.tsx      # Layout limpio sin distracciones
│   │       ├── admision-2026/  # /admision-2026
│   │       └── open-day/       # /open-day
│   │
│   ├── features/               # MÓDULOS DE NEGOCIO POR PROGRAMADOR
│   │   ├── admision/           # Lógica, components, actions de admisión
│   │   ├── niveles/            # Componentes de Inicial, Primaria, Secundaria
│   │   └── institucional/      # Historia, Autoridades, Símbolos
│   │
│   ├── components/             # COMPONENTES GLOBALES COMPARTIDOS
│   │   ├── ui/                 # Button, Input, Card (reutilizables)
│   │   └── layout/             # Header.tsx, Footer.tsx
│   │
│   ├── lib/                    # Utilidades y configuración de APIs
│   │   └── utils.ts            # Helper cn()
│   │
│   └── types/                  # Interfaces y tipos globales de TypeScript
```

---

## 4. Guía para Programadores: Cómo Crear una Nueva Landing

Para evitar conflictos de Git (`merge conflicts`), sigue esta regla:

### Paso 1: Crear una rama Git propia
```bash
git checkout -b feature/landing-talleres
```

### Paso 2: Elegir el grupo de ruta adecuado
- **Si debe tener el Header y Footer oficial del colegio:**  
  Crea la carpeta dentro de `src/app/(main)/tu-landing/page.tsx`.
- **Si es una landing publicitaria sin menú distractivo:**  
  Crea la carpeta dentro de `src/app/(landings)/tu-landing/page.tsx`.

### Paso 3: Componentes privados de la landing
Si tu sección solo la usará tu landing, colócala dentro de `src/features/[modulo]/components/` o en una carpeta `_components/` local a tu ruta.

### Paso 4: Validar antes de hacer Push
```bash
# Comprobar que compila sin errores de TypeScript
yarn build
```

---

## 5. Instrucciones para Despliegue en Producción

### Opción A: Despliegue en Vercel (Recomendado para Next.js)
1. Conecta el repositorio de GitHub en [Vercel](https://vercel.com).
2. Framework Preset: **Next.js**.
3. Configurar variables de entorno (ej. `NEXT_PUBLIC_SITE_URL`).
4. Despliegue automático con cada `git push` a `main`.

---

### Opción B: Despliegue en Servidor VPS / Ubuntu con Node.js y PM2

```bash
# 1. En el servidor, clonar o actualizar repositorio
git pull origin main

# 2. Instalar dependencias para producción
yarn install --frozen-lockfile

# 3. Compilar la aplicación
yarn build

# 4. Iniciar con PM2 (Process Manager)
pm2 start npm --name "sta-fe-web" -- start -- -p 3000

# 5. Guardar estado de PM2
pm2 save
```

Configura **Nginx** como Proxy Reverso apuntando al puerto `3000`.

---

### Opción C: Despliegue en cPanel / Hosting con "Node.js App"
1. En cPanel, abre **Setup Node.js App**.
2. **Node.js version**: Seleccionar `20.x` o superior.
3. **Application mode**: `Production`.
4. **Application root**: Directorio de la app (`fe-web`).
5. **Application startup file**: `node_modules/next/dist/bin/next` con argumento `start`.
6. En la terminal de cPanel ejecutar:
   ```bash
   yarn install
   yarn build
   ```
7. Hacer clic en **Restart Application** en cPanel.

---

## 6. Scripts Disponibles

- `yarn dev`: Inicia el servidor de desarrollo en Turbopack.
- `yarn build`: Compila y optimiza la aplicación para producción.
- `yarn start`: Corre el bundle de producción compilado.
- `yarn lint`: Revisa errores de estilo y buenas prácticas con ESLint.
