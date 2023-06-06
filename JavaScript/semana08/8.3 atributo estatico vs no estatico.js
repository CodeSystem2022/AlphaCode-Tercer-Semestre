class Persona{ //clase padre

    static contadorPersonas = 0; //atributo estatico
    //email = 'Valor default email'; //atributo no estatico

}
//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); no puede acceder desde la clase