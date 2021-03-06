/*
 * Esto es un borrador de JavaScript.
 *
 * Escriba algo de JavaScript, después haga clic derecho o elija del menú Acción:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para mostrar el inspector de objetos con el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */



var peticion=  new XMLHttpRequest();


//Abrir la conexion
var recurso= "http://localhost/learn-php/Peticiones/machine_data.php";
var asyncr= false;


peticion.open("GET",  recurso, asyncr);
//Enviar cabeceras una vez abierta la conexion
peticion.setRequestHeader("Access-Control-Allow-Origin","*");

peticion.send(null);//Aqui puede enviarse el query string

var codeEstado= peticion.status;
var textEstado= peticion.statusText;
var resultado=  peticion.responseText;


console.log( codeEstado, " ", textEstado);
console.log(  resultado );
/***
Observacion, cuando este script se ejecuta desde la herramienta borrador
de Firefox developer, cargar cualquier pagina web que se encuentre en el servidor
o bien abrir una nueva pestana sin cargar ninguna pagina,
de esta manera estamos definiendo el contexto de la ejecucion localmente,
caso contrario cuando se soliciten recursos locales apareceran error de CORS.

Cuando tenia cargada la pagina de google en una pestana, y al mismo tiempo el borrador
y tenia abierta la consola en esa pestana, sucedio que
al pedir recursos php o txt, etc. en localhost, surgieron errores de CORS.
Pues sucede que al estar en Google, una pagina remota, el script que se ejecuta en
ese momento para esa pestana donde esta, realiza las peticiones desde un origen
diferente a localhost
**/





