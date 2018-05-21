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

 function getJSON(url){
   
   return new Promise( function(  exito){
     
     var req=  new XMLHttpRequest();
     req.open("GET", url,  true);
     
     req.addEventListener("load", function(){
       if(req.status < 400 ){
         console.log("exito" );
         exito( req.responseText   );
         //console.log(   req.responseText )  ;
       }else{
         console.log("falla");
         console.log ("Request failed "+req.statusText) ;
       }
       
     });
     
      req.addEventListener("error", function(){
       console.log(   "Network error " ); 
      });
     
     
     req.send( null );
   });
 }

function jsonparse(dta){
  console.log( JSON.parse(dta));
}

 var promesa= getJSON("http://localhost/learn-php/Peticiones/machine_data.php").then(
 jsonparse
 );

console.log( promesa );

 