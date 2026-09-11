# AP Education | Web Oficial

Landing page de **AP Education**, plataforma educativa de matemáticas, comunicación efectiva y metodología STEAM para estudiantes de 7 a 17 años.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (build y dev server)
- **Tailwind CSS 4**
- **lucide-react** (iconos) y **motion** (animaciones)

## Desarrollo local

**Prerrequisitos:** Node.js 20+

```bash
npm install
npm run dev
```

El sitio corre en `http://localhost:3000`.

## Comandos

| Comando              | Descripción                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Servidor de desarrollo en el puerto 3000 |
| `npm run build`      | Compila el sitio a la carpeta `dist/`    |
| `npm run preview`    | Sirve el build localmente                |
| `npm run lint`       | Chequeo de tipos con TypeScript          |
| `npm run clean`      | Elimina la carpeta `dist/`               |

## Despliegue

El sitio se publica en **GitHub Pages** automáticamente mediante el workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) al hacer push a las ramas
`main` o `nuevo-estilo`.

**URL oficial:** https://apeducationlatam.com

## Contacto

- WhatsApp: +51 951 847 956
- Correo: academia.ap.education@gmail.com
- Instagram: [@academiaapeducation](https://www.instagram.com/academiaapeducation/)