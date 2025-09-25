function calcular(){
    // Pedimos los 2 numeros 
    let numero1=prompt("ingresar el primer numero");
    let numero2=prompt("ingresar el segundo numero");
    //Convertimos losn valores de texto en numeros 
numero1=Number(numero1);
numero2=Number(numero2);
//Validamos q ambis sean numeros 
if (!isNaN(numero1) && !isNaN(numero2)) {
    let suma = numero1 + numero2;
    alert("La suma de " + numero1 + " + " + numero2 + " es: " + suma);
    } else {
    alert("Debes ingresar solo valores numericos")

}
}
