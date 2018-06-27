/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

function municipios(){
  
  var nodos=document.querySelectorAll("table table table tbody tr");
var lista= [];

for(let i=0; i<nodos.length; i++){
  
 let tds= nodos[i].childNodes;
 let keyw;
 let valw;
  
  for(let j=0; j< tds.length; j++){
  
    if(  tds[j].textContent.trim().length  )//limpiar
    {
      if( !keyw){
        keyw= tds[j].textContent.trim()  ;
        continue;
        }
      if( keyw &&  !valw){
        valw= tds[j].textContent.trim()  ;
        lista.push(  {   name:valw } );
        keyw= null; valw= null;
      }  
    }
  };
  
};

  return JSON.stringify(  lista);
}

console.log( municipios());

 
