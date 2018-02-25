/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var page="<html><body><h1>Hello world</h1></body></html>";


var objreg= new RegExp("(<h1>)(\\w\\s)+(</h1>)");

//var res= objreg.exec( page );

var res= page.match( "(<h1>)([\\w\\s]+)(</h1>)" );// return an array

console.log(res);

