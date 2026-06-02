# CDC SPA – Landing Page
> Ventanas de PVC · Cierres de Cristal

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion

---

## 🚀 Deploy en Vercel (paso a paso)

### 1. Instalar dependencias y probar localmente

```bash
npm install
npm run dev
# Abre http://localhost:3000
```

### 2. Agregar el logo

Copia el archivo `LOGO_CDC.jpg` (o versión PNG) a:
```
/public/logo-cdc.png
```
El logo se referencia como `/logo-cdc.png` en Navbar y Footer.

### 3. Imágenes opcionales (reemplaza placeholders)

Coloca tus fotos reales en `/public/images/`:
- `hero-bg.jpg` → fondo del Hero (ventana real, 1920×1080 mínimo)
- `nosotros.jpg` → foto equipo/proyecto en sección Nosotros

En cada componente hay un comentario `INSTRUCCIÓN:` con el código exacto a descomentar.

### 4. Subir a GitHub

```bash
git init
git add .
git commit -m "feat: landing CDC SPA inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/cdc-spa-landing.git
git push -u origin main
```

### 5. Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com) → **New Project**
2. Importa el repositorio `cdc-spa-landing`
3. Framework: **Next.js** (detectado automáticamente)
4. Click **Deploy** → listo en ~2 minutos

### 6. Dominio personalizado (cdcspa.cl)

En Vercel → Settings → Domains → Agregar `cdcspa.cl`

En tu DNS (NIC Chile / Tecnoinver):
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com

Tipo: A
Nombre: @
Valor: 76.76.21.21
```

---

## 📧 Conectar formulario de cotización

El formulario actualmente simula el envío. Para hacerlo funcional:

### Opción A: Formspree (más simple, sin backend)
1. Crea cuenta en [formspree.io](https://formspree.io)
2. Crea un nuevo form → copia el `action` URL
3. En `Cotizador.tsx`, reemplaza el `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  await fetch("https://formspree.io/f/TU_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setLoading(false);
  setEnviado(true);
};
```

### Opción B: API Route Next.js → correo
Crear `src/app/api/contacto/route.ts` con Nodemailer o Resend.

---

## 🎨 Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| Naranja principal | `#E8650A` | CTAs, acentos, highlights |
| Naranja hover | `#C4540A` | Hover states |
| Naranja light | `#F07820` | Variante clara |
| Gris oscuro | `#1A1A1A` | Fondos dark, texto |
| Fondo crema | `#f8f6f3` | Secciones alternas |

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css      ← Fuentes, variables, reset
│   ├── layout.tsx       ← Metadata SEO
│   └── page.tsx         ← Composición de secciones
└── components/
    ├── layout/
    │   ├── Navbar.tsx   ← Navegación fija + mobile menu
    │   └── Footer.tsx   ← Footer completo
    └── sections/
        ├── Hero.tsx     ← Hero con parallax
        ├── Nosotros.tsx ← Empresa + stats
        ├── Productos.tsx← 6 tipos de ventanas
        ├── Colores.tsx  ← Colores y texturas
        ├── AMedida.tsx  ← Proyectos personalizados
        └── Cotizador.tsx← Formulario de contacto
```
