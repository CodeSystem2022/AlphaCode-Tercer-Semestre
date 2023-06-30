

import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) { //Ciclo while
            System.out.println("******* Aplicacion Calculadora *******");
            mostarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <= 4){
                    ejecutarOperacion(operacion, entrada);
            } //Fin del if
            else if (operacion == 5) {
                System.out.println("Hasta pronto...");
                break; //Rompe el ciclo y sale
            }
            else {
                System.out.println("Opcion erronea: "+operacion);
            }
            // Imprimimos un salto de linea antes de repetir el menu
            System.out.println();

            } catch (Exception e){ //Fin del try, comienzo del catch
                System.out.println("Ocurrio ubn error: "+e.getMessage());
                System.out.println();
            } //Fin catch










































        System.out.println("******* Aplicación Calculadora ******");
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Integer.parseInt(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Integer.parseInt(entrada.nextLine());
        var resultado = operando1 + operando2;
        System.out.println("resultado = " + resultado);
    }
}
