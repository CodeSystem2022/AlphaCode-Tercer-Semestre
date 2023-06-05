package accesodatos;

public class ImplementacionMySql implements AccesoDatos{

    @Override
    public void insertar() {
       System.out.println("Insertar desde MySql");
    }

    @Override
    public void listar() {
       System.out.println("Listar desde MySql");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde MySql");
    }

    @Override
    public void elminar() {
        System.out.println("Eliminar desde MySql");
    }
}
