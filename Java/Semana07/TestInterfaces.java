package test;
import accesodatos.*;
//
public class TestInterfaces {
    public static void main(String[] args) {
        AccesoDatos datos = new ImplementacionMySql();
        //datos.listar();
        //imprimir(datos);
        datos = new ImplementacionOracle();
        //datos.listar();
        imprimir(datos);
    }

    public static void imprimir(AccesoDatos datos) {
        datos.listar();
    }
}
