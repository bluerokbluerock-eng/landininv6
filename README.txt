LANDININV6 — HTML, CSS Y JAVASCRIPT PUROS

Uso
Abre index.html directamente o sirve esta carpeta como sitio estático.
No necesita React, Astro, Node ni compilación del frontend.
Incluye las fotografías y las fuentes Fraunces, Inter y JetBrains Mono
localmente, incluida la cursiva y el tamaño óptico de Fraunces.

Subir a Railway
1. Conecta a Railway el repositorio que contiene esta carpeta.
2. Si el repositorio es landings, configura Root Directory como /landininv6
   y la ruta del archivo de configuración como /landininv6/railway.json.
   Si esta carpeta es la raíz del repositorio, usa los valores predeterminados.
3. Railway construye el Dockerfile. No agregues comandos de build o inicio.
   Nginx sirve los archivos en PORT (8080 si no hay uno asignado).
4. Genera el dominio del servicio en Networking.
Referencia: https://docs.railway.com/config-as-code/reference
Esta entrega prepara la carpeta, sin publicar en una cuenta de Railway.
No se ejecutó Docker en este equipo porque no está instalado.

Archivos
index.html       Estructura, contenido, preguntas y modal de confirmación.
styles.css       Estilos estáticos y adaptación a pantallas.
script.js        Contador, formulario, preguntas y confirmación condicional.
assets/          Fotografías, fuentes y licencias.
Dockerfile       Contenedor de Nginx.
nginx.conf       Configuración del servidor estático.
railway.json     Build y comprobación de disponibilidad en la ruta /.

Formulario
El original mostraba un modal de confirmación sin enviar datos a un servidor.
La conversión valida nombre, correo, WhatsApp, fecha de nacimiento y país.
Sin un destino configurado, informa que los datos no se han enviado.
Configura formEndpoint en LANDING_CONFIG, al principio de script.js, con un
endpoint POST que acepte JSON: name, email, phone, dob y country.
Solo se abre la confirmación del original cuando el endpoint devuelve un
estado HTTP satisfactorio. Se cierra con Entendido, Escape o al pulsar el fondo.
No se guardan datos personales en el navegador. Mantén claves y credenciales
privadas en el servidor.

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
