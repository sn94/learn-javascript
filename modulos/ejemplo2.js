/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



var  dayName = function () {
  
var  names = [" Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday "];
  
  
return  function(number) {  return  names[number ];};
 
}();
 

 
console.log(dayName(3));



