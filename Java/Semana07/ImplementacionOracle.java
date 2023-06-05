package accesodatos;
public class ImplementacionOracle implements AccesoDatos {
//Metodos
    @Override
    public void insertar() {
        System.out.println("Insertar dedse Oracle");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde Oracle");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde Oracle");
    }

    @Override
    public void elminar() {
        System.out.println("Eliminar desde Oracle");
    }
    
}
