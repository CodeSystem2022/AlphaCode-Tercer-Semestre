package  test;

import enumeraciones.Dias;

public class TestEnumeraciones {
    public static void main(String args[]) {
      System,out,println("Dia 1: "+Dias.LUNES);
      indicarDiaSemana(Dias.LUNES);//Las enumeraciones se tratan como cadenas 
      //Ahora no se deben utilizar comillas, se accede a través de el operador de punto

    }
    
}