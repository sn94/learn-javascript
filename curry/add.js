/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */



/** Curry!    **/


function add( a){
  return function(b){
    
  return function(c){
      return a + b +c;
  } }  }


console.log(     add( 10 )( 5 )( 20 )  ); 




