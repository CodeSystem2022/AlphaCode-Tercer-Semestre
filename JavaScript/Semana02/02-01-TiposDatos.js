// Tipos de Datos en Javascript
/*
La sintaxis en lo que es comentarios 
es muy similar a la de Java
realmente diriamos que es identica
*/
//Tipo String
var nombre = 'Ariel'; 
console.log(nombre);
//Tipo numerico
var numero =3000; 
console.log(numero);

var objeto = {
    nombre : "Ariel",
    apellido : "Betancud",
    telefono : "2622544331"
}

console.log(objeto);

// Tipo de Dato boolean
var bandera = true;
console.log(bandera);

//Tipo de dato funcion
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//Tipo de dato clase
class Persona{
	constructor(nombre, apellido){
		this.nombre = nombre;
		this.apellido = apellido;
	}
}

console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.Log(x)

x = undefined;
console.Log(typeof x);

// null: siginifica ausencia de valor
var y = null; //null no es un tipo de dato, pero su origen es de tipo object
console.Log(typeof y);

//Tipo de dato array y Empty String
var autos = ['Citroen', 'Audi', 'BMW', 'Ford'];
console.log(autos);
console.log(typeof autos); //Preguntamos que tipo de daots es:

var z = '';
console.log(z); // Esto se refier a que es una cadena vacia: 
console,log(typeof z);
