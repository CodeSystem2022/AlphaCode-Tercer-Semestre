miFuncion(8,2); //Esto se le conoce como hoisting

function miFuncion(a, b){
    //console.log("Sumamos: "+(a + b));
    //return a + b;
}

//Llamamos la función
miFuncion(5 , 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

// Declaramos una función de tipo expresión o anónima
let x = function(a, b){return a + b}; // necesita cierre con punto y coma
resultado = x(5, 6); // al llamarla se pone la variable y paréntesis
console.log(resultado);

//  Funciones de tipo self e invoking
(function(a, b){ //Solo se manda a llamar 1 vez
    console.log('Ejecutando la función: '+ (a + b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}
miFuncionDos(5, 7, 3, 6);

// toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto); 



