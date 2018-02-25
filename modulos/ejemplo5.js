/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var scr_body= "var  names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday']; exports.name = function(number) { return  names[number ];};exports.number = function(name) { return  names.indexOf(name); };";
// sE PUeden declarar nuevos objetos para el espacio global haciendo referencia a this punto, y luego seguido
// del nombre de la variable u objeto global



var scr_params= "exports";


var objdays= new Function(scr_params, scr_body);

var emptyobj= {};


objdays(   emptyobj );


console.log( emptyobj.name( emptyobj.number ("Saturday")) );

 