/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/****   Metodos regexp de Strings y metodos propios de un objeto RegExp  ***/


var codigo= "cakephp,codeigniter,laravel";

var regex= /\b(\w+),?\b/g;

var res= regex.exec( codigo);

console.log(  res, regex.lastIndex);
 

