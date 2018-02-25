/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var page="kamisama hajimemashita 1st season";


var objreg= new RegExp("(<h1>)(\\w\\s)+(</h1>)");

//var res= objreg.exec( page );

var res= page.match( "(kami\\w+\\b)" );// return an array
var res2= page.match( "\\w+shita" );// return an array
var res3= page.match( "\\b1st\\b" );// return an array

/**
El \b SE UTILIZA COMO UN MARCADOR ESPECIAL QUE INDICA UN ESPACIO
QUE SEPARA LAS PALABRAS UNAS DE OTRAS **/

console.log(res);
console.log(res2);
console.log(res3);


