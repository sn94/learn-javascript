/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

//Leyendo un documento XML


var peticion=  new XMLHttpRequest();

peticion.open("GET", "http://localhost/learn-php/Peticiones/fruits.xml", false);

peticion.send( null );

var xmlRes= peticion.responseXML;

console.log( xmlRes.querySelectorAll("fruit")); 