class Persona{
    static contadorPersonas = 0;

    constructor(nombre, aèllido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._ëdad = edad;
    }

    get _idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apeliddo){
        this._apellido = apeliddo;
    }

    get edad(){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona}  ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo;
    }

    get _idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadoClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apeliddo, edad);
        this._idCliente = ++Cliente.contadoClientes;
        this._fechaRegistro = fecharegistro;

    }
    get idCliente(){
    return this._idCliente;

 }

   get fecharegistro(){
    return this._fechaRegistro;
 }

   set fecharegistro(fecharegistro){
       this._fechaRegistro = fecharegistro;

 } 

   toString(){
      return `
      ${super.toString()} 
      ${this._idCliente} 
      ${this._fechaRegistro}`;
     
 }
}


//Prueba Clase Persna
Let persona1 = new Persona('Juan', 'Perez', 32);
console.log(persona1.toString());
Let persona2 = new Persona('Carla', 'Ortega', 22);
console.log(perona2.toString());


//Prueba clase empleado
let empleado1 = new Empleado('Pedro', 'Román', 18, 5000);
console.log(empleado1.toString());


let empelado2 = new Empleado('Jonas', 'Torres', 30, 7000);
console.log(empleaedo2.toString());

//Prueba clase Cliente
let cliente1 = new Cliente('Miguel', 'Zala', 29, new Date());
console.log(liente1.toString());

let cliente2 = new Cliente('Natalia', 'Ortega', 22, new Date());
console.log(liente2.toString());
