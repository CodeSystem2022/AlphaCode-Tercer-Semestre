let x = 10; //variable del tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');

//objeto
Let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //Método o función en JavaScript
        return this.nombre+' '+this.apellido;
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

Let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '549261882821';
console.log(persona2.telefono); 
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); Accedemos como si fuera un arreglo Gil
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad); nombre, apellido, email, edad, nombreCompleto
    console.log(persona[propiedad]); Carlos, Gil, cgil@gmail.com, 30 [x: nombreCompleto]
}

console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Bentacud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);



//Distintas formas de imprimir un objeto
//Número 1: la más sencilla: concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto 1');
console.log(persona.nombre+', '+persona.apellido); 

//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto 2');
for (nombrePropiedad in persona) {
console.log(persona [nombre Propiedad]);

//Número 3: La función Objects.Values()
console.log('Distintas formas de imprimir un objeto 3');
Let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el metodo JSON.stringify
console.log('Distinta formas de imprimir un objeto: forma 

') 
Let personaString = JSON.stringify(persona);
console.log(personaString); 
