/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function  findDate(string) {
var  dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  
var  match = dateTime.exec(string);
  console.log( match[0]);
  
return  new  Date(Number(match [3]),
Number(match [2]) - 1,
Number(match [1]));
  
  
}
console.log(findDate ("30-1-2003"));
 