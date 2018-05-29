 
/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */


function showMessage(  ar){
  
  var el= document.createElement("div");
  el.textContent=  ar;
  return document.body.appendChild( el);
}



 function getJSON(url){
   
   return new Promise( function(  exito){
     
     var req=  new XMLHttpRequest();
     req.open("GET", url,  true);
     
     req.addEventListener("load", function(){
       if(req.status < 400 ){
         console.log("exito" );
         console.log(   req.responseText )  ;
         var obj= JSON.parse(  req.responseText );
         exito( obj  );
         
       }else{
         console.log("Falla");
         console.log ("Request failed "+req.statusText) ;
       }
       
     });
     
      req.addEventListener("error", function(){ console.log(   "Network error " );  });
     
     
     req.send( null );
   });/** Fin promesa **/
 }/** Fin funcion ***/






var loading= showMessage("Loading ... (..)");


var mother= getJSON("res/bert.json").then( 
function(   bert   ){      return getJSON(  bert.spouse   );//RETORNA OTRA PROMESA
}).then(     function(sposo){
    //retornar otra promesa 
    return getJSON(  sposo.mother  );
}).then(     function(mother){//ver nombre de la madre
    
    showMessage("The mother name is "+   mother.name );
}).catch(function(error){
  showMessage(  String(  error) );
})
.then( function(){
  document.body.removeChild(  loading  );
});

console.log(  typeof  mother);

 