LANDININV6 — HTML, CSS Y JAVASCRIPT PUROS

Uso
La página conserva su diseño original y sus recursos locales. Para que el
formulario funcione, usa el servidor Node incluido: node --env-file=.env server.mjs
Requiere Node 24. No necesita dependencias ni compilación del frontend.
Abrir index.html directamente sirve para revisar el diseño, sin envío de datos.

Subir a Railway
1. Conecta el repositorio que contiene esta carpeta a un servicio de Railway.
2. Si el repositorio es landings, configura Root Directory como /landininv6
   y el archivo de configuración como /landininv6/railway.json.
3. Railway construye el Dockerfile; no agregues comandos de build o inicio.
4. En Variables configura GOOGLE_SHEETS_WEBAPP_URL y GOOGLE_SHEETS_TOKEN.
   Son los mismos valores privados para las seis landings.
5. Genera el dominio en Networking. El servidor escucha en PORT (8080 por defecto).
La integración necesita que el receptor Apps Script esté desplegado y autorizado
en la cuenta de Zaira. Preparar archivos no publica automáticamente en Railway.

Archivos
index.html / styles.css / script.js  Página original y sus interacciones.
leads-client.js                     Envío y reintentos sin duplicados.
server.mjs                         Archivos públicos y endpoint /api/leads.
landing.config.json                Identidad de esta landing en el servidor.
assets/                            Imágenes, fuentes y licencias.
Dockerfile / railway.json          Despliegue sin dependencias adicionales.
.env.example                       Variables de ejemplo, sin claves reales.
nginx.conf                         Configuración anterior; ya no se utiliza.

Formulario
Valida nombre, correo, WhatsApp, país y fecha de nacimiento. El servidor añade
landininv6 — Inversión inteligente como origen; no acepta una identidad elegida por el cliente.
La hoja recibe fecha y hora, landing, los cinco campos, página e ID de registro.
No se guardan datos personales en localStorage ni se publican claves privadas.
El ID se conserva en memoria si falla un envío y permite reintentar sin duplicar.
Solo muestra confirmación cuando Google Sheets devuelve el ID guardado. Si falta
configuración o falla Google, conserva el formulario y permite volver a intentarlo.
Nunca pongas el token en script.js, index.html o un repositorio. Para uso local,
copia .env.example a .env y completa las variables; .env está excluido de Git.

Interacciones
El contador comienza en siete minutos con cada carga y se detiene en cero.
Las preguntas frecuentes abren una respuesta a la vez, como el original,
con etiquetas de accesibilidad y manejo por teclado.
El botón del pie lleva al formulario y enfoca el nombre.
Se conservan los efectos al pasar el cursor sobre tarjetas y botones.
Se respeta la preferencia de reducir movimiento.

Referencia visual
Se mantienen la composición oscura con detalles dorados, textos, cifras,
testimonios y fotografías que utiliza src/App.tsx. La referencia es la página
generada por el código del ZIP; no hay un .fig o captura del lienzo independiente.
Los PNG que no usa el componente no se incluyen, y los scripts de publicación
de Figma no se ejecutan. Los textos y afirmaciones proceden del material
entregado; no están conectados a fuentes de datos ni actividad en vivo.

Recursos
Fotografías originales: Unsplash. https://unsplash.com/license
Fraunces, Inter y JetBrains Mono: Google Fonts, SIL Open Font License.
CSS compilado con Tailwind CSS, licencia MIT; no requiere Tailwind en ejecución.
Licencias redistribuidas en assets/licenses/.
