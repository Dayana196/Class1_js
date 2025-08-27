
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

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
    return array1.filter(function(elemento) {
        return array2.includes(elemento);
    });
}

console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(arrayNumeros) {
    return arrayNumeros.reduce(function(acumulador, numero) {
        if (numero % 2 === 0) {
            return acumulador + numero;
        }
        return acumulador;
    }, 0);
}
console.log(sumarPares([1, 2, 3, 4, 5, 6])); 

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(arrayNumeros) {
    return arrayNumeros.map(function(numero) {
        return numero * numero;
    });
}
console.log(elevarAlCuadrado([1, 2, 3, 4])); 