/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/****   Parseando un archivo INI  ***/

var ini="searchengine=http://www.google.com/search?q=$1\n";
ini+="spitefulness=9.7\n";
ini+="; comments  are  preceded  by a semicolon ...\n";
ini+="; each  section  concerns  an  individual  enemy\n";
ini+="[larry]\n";
ini+="fullname=Larry  Doe\n";
ini+="type=kindergarten  bully\n";
ini+="website=http://www.geocities.com/CapeCanaveral/11451\n";
ini+="[gargamel]\n";
ini+="fullname=Gargamel\n";
ini+="type=evil  sorcerer\n";
ini+="outputdir=/home/marijn/enemies/gargamel";


var currentSection= { name:  null, fields: [] };
var sections=  [ ];

lineas=  ini.split( /\r?\n/ );

lineas.forEach(  function( line  ){
  // verificar si la linea actual es un comentario, y si tambien contiene varios espacios en blanco delante
  var matcheado; 
  if( /^\s*(\s*;.*)?$/.test(line) )
    return;
  else{
    // extraer nombre de seccion
    //extrae las propiedades para el objeto
    if( matcheado= line.match(/^\[(.*)\]$/)  ){
     
        currentSection= { name: matcheado[1], fields:[] }; 
        sections.push(  currentSection );
        
    }
    else if( matcheado= line.match(/^(\w+)=(.+)$/) ){   
       currentSection.fields.push( {name: matcheado[1]  ,  value: matcheado[2] } ) ;
    }else{
      throw  new Error('Invalid line ');
    }
        
  }
   
});
 

  console.log(  sections );
  