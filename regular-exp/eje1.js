/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/****   Metodos regexp de Strings y metodos propios de un objeto RegExp  ***/


var codigo= "I took the cat to the car";
var text2= "I want pop corns"; 
var text3="This cake is delicious";


var matc= /ca./.test(codigo);
var matc2= /p.?op/.test(text2);
var matc3=/ious$/.test( text3 );


console.log(   matc3);
 

