public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        while (true){ //Ciclo Infinito

            
        } //Fin while
        System.out.println("******* Aplicación Calculadora *******");
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Integer.parseInt(entrada.nextLine());
        System.out.print("Digite el valor para el operando1: ");
        var operando2 = Integer.parseInt(entrada.nextLine());
        var resultado = operando1 + operando2;
        System.out.println("resultado = " + resultado);
    }
}

import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("******* Aplicacion Calculadora *******");
        //Mostramos el menú
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicacion
                4. Division
                5. Salir
                """);
        System.out.print("Operacion a realizar? ");
        var operacion = Integer.parseInt(entrada.nextLine());

        if(operacion >= 1 && operacion <=4){
            System.out.print("Digite el valor para el operando1: ");
            var operando1 = Integer.parseInt(entrada.nextLine());
            System.out.print("Digite el valor para el operando2: ");
            var operando2 = Integer.parseInt(entrada.nextLine());


        }

    }
}
















        break; //Rompe el ciclo y sale

        //Imprimimos un salto de Linea antes de repetir el menú
       

    System.out.println();
         } //Fin while
