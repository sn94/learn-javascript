/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

/**
PROMISES
**/
/** Encapsulan en un objeto acciones que se ejecutan en caso de exito o fallo
de una tarea asincrona **/

 function get(url){
   
   return new Promise( function(  exito, falla  ){
     
     var req=  new XMLHttpRequest();
     req.open("GET", url,  true);
     
     req.addEventListener("load", function(){
       if(req.status < 400 ){
         exito( req.responseText );
       }else{
         falla( new Error("Request failed "+req.statusText)) ;
       }
       
     });
     
      req.addEventListener("error", function(){
        falla(  new Error("Network error " )); 
      });
     
     
     
   });
 }