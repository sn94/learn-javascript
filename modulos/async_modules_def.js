/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
define (  [],  function () {
var  names = [" Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday "];
return {
name: function(number) { return  names[number ]; },
number: function(name) { return  names.indexOf(name); }
};
}  );



define (   [" weekDay", "today"],    
          function(weekDay , today) {console.log(weekDay.name(today.dayNumber ()));}
       );


var  defineCache = Object.create(null);
var  currentMod = null;

function  getModule(name) {
if (name in  defineCache)
return  defineCache[name];
  
  
  
  
var  module = {exports: null ,    loaded: false ,  onLoad: []};
  
defineCache[name] = module;
  
backgroundReadFile(name , function(code) {
currentMod = module;
new  Function ("", code)();
});
  
return  module;
}


function  define(depNames , moduleFunction) {
var  myMod = currentMod;
var  deps = depNames.map(getModule);
  
  
deps.forEach(function(mod) {
if (!mod.loaded)
mod.onLoad.push(whenDepsLoaded);
});
  
  
  
function  whenDepsLoaded () {
if (!deps.every(function(m) { return m.loaded; }))
return;
var  args = deps.map(function(m) { return m.exports; });
var  exports = moduleFunction.apply(null , args);
if (myMod) {
  myMod.exports = exports;
myMod.loaded = true;
myMod.onLoad.forEach(function(f) { f(); });
}
}
whenDepsLoaded ();
}