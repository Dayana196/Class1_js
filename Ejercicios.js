
//Ejerccios de Practica

// 1. Crea una función que reciba dos números y devuelva su suma
function sumarNumeros(num1, num2) {
    console.log("Sumando dos números " + num1 + " y " + num2 + " igual a:");
    return num1 + num2;
}
console.log(sumarNumeros(30, 20));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos 

function encontrarMayor(arrayNumeros) {
    let mayor = arrayNumeros[0];
    for (let i = 1; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > mayor) {
            mayor = arrayNumeros[i];
        }
    }
    return mayor;
}
console.log(encontrarMayor([100, 65, 23, 700, 50])); // 50

//3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto){
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
} 

console.log(contarVocales("Me encanta dibujar")); // 4

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirMayusculas(arrayStrings) {
    return arrayStrings.map(function(str) {
        return str.toUpperCase();
    });

}
console.log(convertirMayusculas(["gato", "mundo", "kitty"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
console.log(esPrimo(3));

