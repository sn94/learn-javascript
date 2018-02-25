/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



 
function readFile( name ){
  
  return "";
}

funcion  require( name ){
  
  var code = new Function("exports", readFile( name ));
  var exports={};
  code(   exports );
  return exports;
  
}
  

console.log(require ("weekDay").name(1));