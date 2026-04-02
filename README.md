# Portafolio Profesional - Richard Stalyn Rodriguez Villarreal

Portafolio web premium desarrollado para presentar perfil profesional, experiencia laboral, habilidades tecnicas y proyectos reales.

## Version publicada

El portafolio esta subido y disponible en linea en:

- https://portafolio-production-0da0.up.railway.app/

Tambien puedes usar este repositorio como base local para desarrollo y actualizaciones.

## Descripcion

Este proyecto muestra la marca personal de Richard Stalyn Rodriguez Villarreal, Ingeniero en Computacion, con enfoque en:

- Desarrollo de software
- Laravel y aplicaciones web
- Sistemas operativos y automatizacion
- Cultura de codigo abierto
- Experiencia actual en Hospital San Vicente de Paul (Ibarra, Ecuador)

## Caracteristicas principales

- Diseno premium y adaptable a movil
- Contenido 100% en espanol
- Secciones profesionales completas (perfil, habilidades, proyectos, contacto)
- Metricas verificables desde GitHub API
- Formulario de contacto con backend en PHP
- SEO tecnico completo (Open Graph, Twitter Cards, JSON-LD, robots, sitemap, manifest)

## Estructura del proyecto

- [index.html](index.html): pagina principal del portafolio
- [styles.css](styles.css): estilos visuales
- [script.js](script.js): interactividad, metricas GitHub y formulario
- [contact.php](contact.php): backend del formulario de contacto
- [Riccijandro-CV.html](Riccijandro-CV.html): CV en formato web
- [favicon.svg](favicon.svg): icono del sitio
- [og-image.svg](og-image.svg): imagen social para SEO
- [robots.txt](robots.txt): reglas para bots
- [sitemap.xml](sitemap.xml): mapa del sitio
- [site.webmanifest](site.webmanifest): manifest para instalacion web

## Requisitos

- PHP 8.0 o superior (recomendado)
- Servidor local (XAMPP en este caso)
- Conexion a internet para obtener metricas de GitHub

## Despliegue

La version publica del sitio esta alojada en Railway:

- [Portafolio en Railway](https://portafolio-production-0da0.up.railway.app/)

Si realizas cambios, recuerda actualizar el despliegue para mantener la version publicada sincronizada con el repositorio.

## Ejecucion local (XAMPP)

1. Coloca la carpeta del proyecto en:
   - `C:/xampp/htdocs/port/portafolio`
2. Inicia Apache desde el panel de XAMPP.
3. Abre en el navegador:
   - `http://localhost/port/portafolio/`

## Formulario de contacto

El formulario envia datos a [contact.php](contact.php).

Comportamiento actual:

- Valida campos requeridos
- Incluye campo honeypot anti-spam
- Intenta envio por `mail()`
- Registra respaldo local en `messages.log`

Nota:

Para envio de correos real en produccion, se recomienda integrar SMTP (por ejemplo, PHPMailer + Mailtrap/SendGrid/Mailgun).

## Personalizacion rapida

- Datos personales y textos: [index.html](index.html)
- Textos dinamicos y metricas: [script.js](script.js)
- Experiencia y perfil extendido: [Riccijandro-CV.html](Riccijandro-CV.html)
- Estilo visual: [styles.css](styles.css)

## SEO

El proyecto ya incluye:

- Meta description y keywords
- Open Graph y Twitter Card
- Schema.org (Person)
- Canonical
- robots.txt
- sitemap.xml

Antes de produccion, verifica que la URL final coincida con tu dominio real en:

- [index.html](index.html)
- [robots.txt](robots.txt)
- [sitemap.xml](sitemap.xml)

## Licencia

Uso personal/profesional de portafolio.
