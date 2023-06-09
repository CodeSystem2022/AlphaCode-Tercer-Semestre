Let x = 10; //variable del tipo primitiva
console.log(x.length);

//objeto
Let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '543849384938'
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //accedemos con si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Castro'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error 
console.log(persona);

//Distintas formas de imprimir un objeto
//Número 1: La mas sencilla_ concatenar cada valor de cada propiedad
console.log('Distinta formas de imprimir un objeto: forma 1') 
console.log(persona.nombre+', '+persona.apellido);
