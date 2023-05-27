class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    get nombre(){
        return this._nombre;
    }
}

let persona1 = new Persona('Martín', 'Pérez');
console.log(persona1);
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);
//console.log(persona2);
