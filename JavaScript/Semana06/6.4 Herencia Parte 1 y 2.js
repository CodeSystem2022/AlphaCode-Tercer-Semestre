
class Persona{ //Clase padre
    constructor(nombre, apellido){ 
        this._nombre = nombre; 
        this._apellido = apellido; 
    }
  
    get nombre(){
        return this._nombre;
    }


    set nombre(nombre){
        this._nombre = nombre;
    }
  
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{//clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this.departamento = departamento;
    }
}
get departamento(){
    return this._departamento;
}

set departamento(departamento){
    this._departamento = departamento;
}

let persona1 = new Persona("Martín", "Perez"); 
console.log(persona1.nombre); 
persona1.nombre = 'Juan Carlos';   
console.log(persona1.nombre);
persona1.apellido = 'Rodriguez';   
console.log(persona1.apellido);    
//console.log(persona1); 
let persona2 = new Persona("Carlos","Lara"); 
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';   
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1); Empleado { _nombre: 'Maria' , _apellido: 'Gimenez', _departamento 'Sistemas' }
console.log(empleado1.nombre); Maria

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
consoloe.log(persona1.toString());

//persona1.saludar(); no se utiliza desde el objeto 
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1); 

//console.logg(persona1.contadorObjetosPersona);
consolo.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No puede acceder desde la clase 
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
// Persona.MAX_ONJ = 10; // No se puedo modificar ni alterar 
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz');
console.log(persona5.toString());


