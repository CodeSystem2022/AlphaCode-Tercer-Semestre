class Empleados extends Persona{

    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this.sueldo = sueldo;
    }

    get _idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        this.sueldo;
    }

    set sueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._idEmpleado} 
        ${this._sueldo}`;
    }
}
