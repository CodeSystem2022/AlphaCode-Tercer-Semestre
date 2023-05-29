//Metodo Apply
let persona5 = {
    nombre 'Carlo',
    apellido 'Lara'
}

console.log(persona4.nombreCompleto('Lic.', '5493618585856'));
console.log(persona4.nombreCompleto2.call(persona5,'Ing.','5493618585856'));

//Metodo Apply
let arreglo = ['Ing.', '5493618585856'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));