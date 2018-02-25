/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


function  require(name) {
if (name in  require.cache)//se verifica si existe la propiedad name en el objeto cache
return  require.cache[name];
  
  //si no existe se crea uno
var  code = new  Function ("exports , module", "exports.nombre='indefinido'");//recibe cadena de parametros y cuerpo de funcion
var  exports = {}, module = {exports: exports };//el objeto module apunta  al objeto vacio, se puede agregar mas propiedades a module
  
code(exports , module);//se invoca a la funcion creada y asignada a la variable code
  
  
require.cache[name] = module.exports; //se asigna un objeto a al objeto cache en su propiedad name, el cual coincide con el nombre del modulo que se carga
return  module.exports;
}


// una funcion es un objeto, se puede crear propiedades para este dinamicamente

require.cache = Object.create(null);

console.log(  require("modulo1").nombre   );


 