/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

// Peticion asincrona


var req=   new XMLHttpRequest();

req.open("GET",  "http://localhost/learn-php/Peticiones/headers.php");


//Programa evento de escucha, de forma similar que se programa eventos 
//a elementos del DOM
req.addEventListener( "load",   function(){
  
  console.log(  req.status );
  console.log(  req.statusText );
  console.log(  req.responseText );
});
req.send(null);