/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/****   Metodos regexp de Strings y metodos propios de un objeto RegExp  ***/


var codigo= "<texto><titulo>Top animes</titulo><ul><li>Sailor moon</li><li>Shingeki no Kyojin</li><li>Saint seiya</li><li>kamisama hajimemashita</li></ul></texto>"



// extrae titulo y elementos de la lista
/* objeto
name
lista */

var series=[];

/*** Empleando metodos de string **/
//titulo posicion
var pos= codigo.search( /<titulo>(.*)<\/titulo>/  );
console.log("Posicion del titulo en la cadena:  ", pos+1  );
//obtener el titulo
var titlestr= codigo.match( /<titulo>(.*)<\/titulo>/ );
var titulo= titlestr[1];
console.log("Titulo en la cadena:  ", titulo );
//lista
 
var coincidencia= codigo.match( /<li>([\w\s]*)<\/li>/);
console.log(   coincidencia );

while( coincidencia ){
  console.log("Matcheando ", coincidencia[1]);
  
  codigo = codigo.replace( coincidencia[0],"");
  console.log("codigo ",codigo);
  series.push( coincidencia[1]  );
  coincidencia= codigo.match( /<li>([\w\s]*)<\/li>/);
}



console.log(  series);
 

