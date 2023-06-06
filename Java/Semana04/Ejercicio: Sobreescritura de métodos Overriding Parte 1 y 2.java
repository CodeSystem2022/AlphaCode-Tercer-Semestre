package domain;
public class Gerente extends Empleado {
  private String departamento;
  public Gerente (String nombre, double sueldo, String departamento
      super(nombre, sueldo);
      this.departamento = departamento;
                  
                  
                  

package test;
public class TestSobreescritura {
Navigator public static void main(String[] args) {
Gerente gerentel = new Gerente ("José", 5000, "Sistemas")
System.out.println("gerente1 = " + gerente1.obtenerDetalles());
  
  
  
  //Sobreescribimos el método
@Override
public String obtenerDetalles ()
return super.obtenerDetalles ()+", Departamento: "+this.departamento;
}
