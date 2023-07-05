
import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO{
  //Metod listar
  public List<Estudiante> listar(){
    List<Estudiante> estudiantes = new ArrayList<>();
    //Creamos ahora algunos objetos que son necesarios para comunicarnos con la base de datos
    PreparedStatement ps; //Envia la sentencia de la base de datos
    ResultSet rs; //Obtenemos el resultado de la base de datos
    //Creamos un objeto de tipo conexion
    Connection con = getConnection();
    String sql = "SELECT * FROM estudiantes2022 ORDER BY estudiantes2022";
    try{
        ps = con.prepareStatement(sql);
        rs = ps.executeQuery();
      while(rs.next()){
        var estudiante = new Estudiante();
        estudiante.setIdEstudiante(rs.getInt("idestudiante2022");
        
      }
    }catch (Exception e){
      System.out.print("Ocurrio un error al seleccionar datos: "+e.getMessage());
}
  

  











































 // 12.6 Método agregarEstudiante() -> Parte 1 y 2  
//Metodo agregar un nuevo estudiante
        public boolean agregarEstudiante(Estudiante estudiante){
            PreparedStatement ps;
            Connection con = getConnection();
            String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email)VALUES (?, ?, ?, ?)";
            try {
                ps = con.prepareStatement(sql);
                ps.setString(1, estudiate.getNombre());
                ps.setString(2, estudiante.getApellido);
                ps.setString(3, estudiante.getTelefono);
                ps.setString(4, estudiante.getEmail);
                ps.execute();
                return  true;

            }catch (Exception e){
                System.out.println("Ocurrio un error al agregar un estudiante: "+e.getMessage());
            }//Fin catch
            finally {
                try{
                    con.close();
                } catch (Exception e){
                    System.out.println("Error al cerrar la conexion: "+e.getMessage());
                }//Fin finally

            }
            return false;
        }//Fin metodo agregarEstudiante

    }




  }
    //12.7 Comenzamos con las pruebas del Método -> agregarEstudiante() Parte 1 y 2
    //Agregar estudiante
    var nuevoEstudiante = new Estudiante ("Carlos","Lara","548584884","carlos@email.com");
    var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
    if(agregado)
        System.out.println("Estudiante agregado: "+nuevoEstudiante);
    else
        System.out.println("No se ha agregado estudiante: "+nuevoEstudiante);
}













  
