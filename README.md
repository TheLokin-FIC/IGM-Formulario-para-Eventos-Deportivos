<h1 align="center">Formulario para Eventos Deportivos</h1>

## Introducción
En este proyecto se ha desarrollado un formulario para eventos deportivos, enfocado a la introducción de puntuaciones por parte de los jueces de los distintos participantes en las competiciones pertinentes. Por tanto la información relevante a recopilar sería:

- Si el concurso fue por parejas, nombre y apellidos del primer miembro de la pareja y nombre y apellidos del segundo miembro de la pareja.

- Si el concurso fue individual, nombre y apellidos del concursante.

- Fecha del concurso.

- Una indicación de si el consurso fue en el *programa corto* o *programa largo*.

Las notas se otorgan mediante un valor numérico, con un máximo de dos decimales, y pueden variar entre 0 y 7, y es obligatorio que el juez cubra todos los campos del formulario. Por tanto, los posibles errores por cada uno de los campos son dos: o bien el contenido no se ajusta al contenido esperado (ej. la nota no es un valor numérico tal y como se ha descrito), o bien el campo está vacío. Además, una vez cubiertos los distintos apartados de puntuación se mostraría la puntuación total que alcanzaría.

## Implementación
En la carpeta docs se pueden encontrar los wireframes realizados, donde se planteo previamente la estructura visual que tendría la aplicación. Además en la tabla inferior se muestran los elementos CSS empleados, así como la versión desde la que ciertos navegadores tienen compatibilidad con los mismos.

|Elemento|Chrome|Edge|Firefox|Safari|Opera|
|:---|:---|:---|:---|:---|:---|
|background|1.0|4.0|1.0|1.0|3.5|
|background-color|1.0|4.0|1.0|1.0|3.5|
|background-image|1.0|4.0|1.0|1.0|3.5|
|background-repeat|1.0|4.0|1.0|1.0|3.5|
|background-size|4.0<br>1.0 -webkit-|9.0|4.0<br>3.6 -moz-|4.1<br>3.0 -webkit-|10.5<br>10.0 -o-|
|border|1.0|4.0|1.0|1.0|3.5|
|border-radius|5.0<br>4.0 -webkit-|9.0|4.0<br>3.0 -moz-|5.0<br>3.1 -webkit-|10.5|
|box-shadow|10.0<br>4.0 -webkit-|9.0|4.0<br>3.5 -moz-|5.1<br>3.1 -webkit-|10.5|
|box-sizing|10.0<br>4.0 -webkit-|8.0|29.0<br>2.0 -moz-|5.1<br>3.2 -webkit-|9.5|
|calc|26.0<br>19.0 -webkit-|9.0|16.0<br>4.0 -moz-|7.0<br>6.0 -webkit-|15.0|
|color|1.0|3.0|1.0|1.0|3.5|
|cursor|5.0|5.5|4.0|5.0|9.6|
|content|1.0|8.0|1.0|1.0|4.0|
|display|4.0|8.0|3.0|3.1|7.0|
|font-family|1.0|4.0|1.0|1.0|3.5|
|font-size|1.0|5.5|1.0|1.0|7.0|
|height|1.0|4.0|1.0|1.0|7.0|
|left|1.0|5.5|1.0|1.0|5.0|
|letter-spacing|1.0|4.0|1.0|1.0|3.5|
|list-style|1.0|4.0|1.0|1.0|7.0|
|margin|1.0|6.0|1.0|1.0|3.5|
|margin-left|1.0|6.0|1.0|1.0|3.5|
|margin-right|1.0|6.0|1.0|1.0|3.5|
|margin-top|1.0|6.0|1.0|1.0|3.5|
|overflow|1.0|4.0|1.0|1.0|7.0|
|padding|1.0|4.0|1.0|1.0|3.5|
|position|1.0|7.0|1.0|1.0|4.0|
|transform|36.0<br>4.0 -webkit-|10.0<br>9.0 -ms-|16.0<br>3.5 -moz-|9.0<br>3.2 -webkit-|23.0<br>15.0 -webkit-<br>10.5 -o-|
|transform-origin|36.0<br>4.0 -webkit-|10.0<br>9.0 -ms-|16.0<br>3.5 -moz-|9.0<br>3.2 -webkit-|23.0<br>15.0 -webkit-<br>10.5 -o-|
|transition|26.0<br>4.0 -webkit-|10.0|16.0<br>4.0 -moz-|6.1<br>3.1 -webkit-|12.1<br>10.5 -o-|
|transition-delay|26.0<br>4.0 -webkit-|10.0|16.0<br>4.0 -moz-|6.1<br>3.1 -webkit-|12.1<br>10.5 -o-|
|top|1.0|5.0|1.0|1.0|6.0|
|vertical-align|1.0|4.0|1.0|1.0|4.0|
|width|1.0|4.0|1.0|1.0|3.5|