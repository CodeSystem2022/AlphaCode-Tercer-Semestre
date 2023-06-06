
package test;


public class excepcionesParte4 {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = 10/0;
        
        } catch(Exception e){
            System.out.println("Ocurrio un Error");
            e.printStackTrace(System.out);//se conoce como la pila de excepciones
            
        }
        System.out.println("La variable de resultado tiene como valor: "+resultado);
    }
    
}
