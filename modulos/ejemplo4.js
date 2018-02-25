/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//  EXPRESION DE FUNCION INVOCADA INMEDIATAMENTE


(function(exports) {
var  names = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
  
exports.name = function(number) {
return  names[number ];
};
  
  
exports.number = function(name) {
return  names.indexOf(name);
};
  
  
})(this.weekDay = {});

// sE PUeden declarar nuevos objetos para el espacio global haciendo referencia a this punto, y luego seguido
// del nombre de la variable u objeto global

console.log(weekDay.name(weekDay.number ("Saturday")));