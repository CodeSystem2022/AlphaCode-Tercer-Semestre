
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
  

  


