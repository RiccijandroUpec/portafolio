# Portafolio Profesional - Richard Stalyn Rodriguez Villarreal

Portafolio web desarrollado para presentar perfil profesional, experiencia laboral, habilidades técnicas y proyectos reales.

## Versión publicada

El portafolio está desplegado en Railway y disponible públicamente en:

- https://riccijandro.cyrshop.app/ (dominio propio, requiere configurar el CNAME en el proveedor del dominio)
- https://portafolio-production-0da0.up.railway.app/ (URL interna de Railway, sigue funcionando aunque uses el dominio propio)

También puedes usar este repositorio como base local para desarrollo y actualizaciones.

## Descripción

Este proyecto muestra la marca personal de Richard Stalyn Rodriguez Villarreal, Ingeniero en Computación, con enfoque en:

- Desarrollo de software (Laravel, Node.js)
- Automatización de procesos con IA (Playwright + Gemini/DeepSeek)
- Sistemas operativos y administración de redes
- Cultura de código abierto
- Docencia y experiencia actual en Hospital San Vicente de Paul (Ibarra, Ecuador)

## Características principales

- Diseño adaptable a móvil
- Contenido en español
- Secciones profesionales completas (perfil, habilidades, proyectos, contacto)
- Métricas de GitHub obtenidas en vivo desde la API pública
- Contacto directo por WhatsApp (sin backend ni configuración de email)
- SEO técnico completo (Open Graph, Twitter Cards, JSON-LD, robots, sitemap, manifest)

## Estructura del proyecto

- [index.html](index.html): página principal del portafolio
- [styles.css](styles.css): estilos visuales
- [script.js](script.js): interactividad y métricas de GitHub
- [Riccijandro-CV.html](Riccijandro-CV.html): CV en formato web
- [favicon.svg](favicon.svg): icono del sitio
- [og-image.svg](og-image.svg): imagen social para SEO
- [robots.txt](robots.txt): reglas para bots
- [sitemap.xml](sitemap.xml): mapa del sitio
- [site.webmanifest](site.webmanifest): manifest para instalación web

## Requisitos

- Servidor local (XAMPP en este caso) o cualquier servidor estático
- Conexión a internet para obtener métricas de GitHub

## Despliegue

La versión pública del sitio está alojada en Railway:

- [Portafolio en Railway](https://portafolio-production-0da0.up.railway.app/)

Si realizas cambios, recuerda actualizar el despliegue para mantener la versión publicada sincronizada con el repositorio.

## Ejecución local (XAMPP)

1. Clona o coloca la carpeta del proyecto en:
   - `C:/xampp/htdocs/portafolio`
2. Inicia Apache desde el panel de XAMPP.
3. Abre en el navegador:
   - `http://localhost/portafolio/`

## Contacto

El botón principal de la sección de contacto abre WhatsApp directamente (`wa.me/593983185069`) con un mensaje
precargado. No depende de ningún backend, API key ni configuración de correo — funciona igual en local que en
producción. El número y el texto del mensaje se editan directamente en el enlace dentro de [index.html](index.html).

## Personalización rápida

- Datos personales y textos: [index.html](index.html)
- Métricas dinámicas de GitHub: [script.js](script.js)
- Experiencia y perfil extendido: [Riccijandro-CV.html](Riccijandro-CV.html)
- Estilo visual: [styles.css](styles.css)
- Descarga del CV en PDF: abre [Riccijandro-CV.html](Riccijandro-CV.html) y usa el botón "Descargar PDF"

## SEO

El proyecto ya incluye:

- Meta description y keywords
- Open Graph y Twitter Card
- Schema.org (Person)
- Canonical apuntando al dominio real de producción (Railway)
- robots.txt
- sitemap.xml

Si en el futuro migras a un dominio propio, actualiza la URL en:

- [index.html](index.html) (canonical, og:url, og:image, twitter:image, JSON-LD)
- [robots.txt](robots.txt)
- [sitemap.xml](sitemap.xml)

## Licencia

Uso personal/profesional de portafolio.
