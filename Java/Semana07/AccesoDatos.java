package accesodatos;
    public interface AccesoDatos{
        int MAX_REGISTRO = 10;
        //Metodo insertar es abstracto y sin cuerpo
        void insertar();

        void listar();

        void actualizar();

        void elminar();
    }
    

