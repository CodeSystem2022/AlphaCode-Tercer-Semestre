//Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores al arreglo
autos.push('Audi'); // Agregamos el elemento al final del arreglo
console.log(autos);

// Otras formas de agregar elementos del arreglo
autos[autos.length] = 'Porche';

//Tercera forma de agregar elementos teniendo CUIDADO
autos[6] = 'Renault';
console.log(autos);
