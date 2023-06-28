
class Cliente extends persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaReg = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fecharegistro) {
        this._fechaRegistro = fecharegistro;
    }

    toString() {
        return `
        ${super.toString()} 
        ${this._idCliente}
        ${this._fechaRegistro}`;
    }
}