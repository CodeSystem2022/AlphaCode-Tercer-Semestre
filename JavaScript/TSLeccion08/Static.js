//let persona3= new Persona('Carloa', 'Ponce'); esto no se debe hacer, Persona is not defied

class Persona{ //Clase padre

    static contadorPersonas = 0; //Atributo estático
    //email = 'Valor default email'; //Atributo no estático

    static get MAX_OBJ(){ //Este método simula una constante
        return 5;
    }

    