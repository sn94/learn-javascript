/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */



// Funciones para codificar y decodificar cadenas con caracteres conflictivos, 
//que se incluyen en la URL en una peticion GET

var  codeString =  encodeURIComponent("Hola, como estas?");

console.log(  codeString );


var decodeString=  decodeURIComponent(  codeString );


console.log(decodeString);