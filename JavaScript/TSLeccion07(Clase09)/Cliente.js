
class Cliente extends Persona {
    
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fecharegistro) {
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._idCliente}
        ${this._fechaRegistro}`;
    }
}
