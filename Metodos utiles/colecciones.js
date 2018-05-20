/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

var vegies= ['tomatoe', 'onion', 'lettuce','cucumber','cabbage', "garlic"];

// Spread operator inside an object literal
var objVegie=  {  ...vegies} ;
console.log( objVegie);


//For ..of loop
for( const item of vegies){
  console.log(item);
}


//Metodo de busqueda includes() para Arrays, devuelve un valor booleano
console.log(  vegies.includes("tomatoe") ) ;
console.log(  vegies.includes("carrot")  );



//Metodo some(), recibe una funcion como argument en vez de un string
//Verifica la condicion para cada elemento hasta que se accede al elemento
//que cumple cumple la condicion y se devuelve entonces true
//ES5
var allowed=  vegies.some( function(item){
 return  item == "spinach"; //mm 
});
console.log("Do you have spinach on sale?", allowed);
//ES6
var allowed2=  vegies.some((item)=>item == "spinach");
console.log("For second time,Do you have spinach on sale?", allowed2);




//Metodo every(), similar a some(), pero la condicion debe cumplirse
//para todos los elementos

//ES5
var all=  vegies.every( function(item){
 return  item.length > 3; 
});
console.log("The length of vegies names is greater than 3?", all);
//ES6
var all2=  vegies.every(  (item)=>   item.length > 3);
console.log("The length of vegies names is greater than 3?", all2);




/*
Metodo filter(), crea una copia del array original pero exceptuando aquellos
elementos que no pasaron la prueba o no cumplieron con la condicion definida
en la funcion callback
**/

var newvegies=  vegies.filter( function(valor, indice, arreglo){ 

  return !(valor == "onion");

} );

console.log("Selected vegies ", newvegies );



/*
Metodo map() similar a map, pero en vez de omitir algunos elementos, se pueden
modificar los items **/

var uppervegies= vegies.map( function(val, index, arr){
  return val.toUpperCase();
});
console.log("Uppercase vegies ", uppervegies );





/**
Metodo reduce(), permite formar un nuevo valor a partir del arreglo
**/

var vegiesString= vegies.reduce(  function(acumu, valor ){
  return acumu+" // "+valor;
});

console.log("Vegies String ", vegiesString);


