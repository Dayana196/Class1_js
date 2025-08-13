console.log("Hola Campers!");
let nombre = "Dayana Barbosa" ;
let edad = 19;
let profeción = "Programadora";
let Nombrecompleto = nombre + " "  + edad + " " + profeción;
// holiiiiiiiiiiiiii 
console.log (Nombrecompleto);

/**
 * 
 * @param {number} a El primer numero para la adicion 
 * @param {number} b El segundo numero para la adicion
 * @returns {number} La suma de a y b 
 */
function sumar(a,b) {
    return a + b;
}

//Llamar a la funcion sumar
console.log(sumar(1,10)); console.log(sumar(12,8))
function mostrar(any){
    console.log(any)
}

//operadores matematicos
mostrar(5+5);
mostrar(5-3);
mostrar(5*3);
mostrar(5/3);
mostrar(5%3);
mostrar(5**2);
let number = 5;
// Incrementos o decretos
// - 0 + number -> inmediata
// number -- 0 ++ -> Posterior
mostrar(++number);//6
mostrar("Resultado de number despues de ++" + number);
mostrar(number++);
mostrar(number--);
mostrar(number+=2);
mostrar(number-=2);
mostrar(number*=2);
mostrar(number/=5);
mostrar(number%=2);
mostrar(number/0);

//operadores de igualdad
mostrar ('igualdad:' + (5=='5'));
mostrar ('estrictamente igual:' + (5==='5'));
mostrar ('Desigualdad:' + (5=='5'));
mostrar ('Desigualdad estricta:' + (5 !=='5'));
mostrar ('Mayor:' + (5 >'4'));
mostrar ('Mayor igual:' + (5 >='4'));
mostrar ('Menor:' + (5 <= '4'));
mostrar ('Concatenar:' + (5 + '4'));
let a,b,c ;
a = b = c = 1 + 20;
mostrar(a)
mostrar(b)
mostrar(c)
//operadores logicos 
mostrar("Operador y logico(AND):" + (5==5 & true));
mostrar("Operador y logico(AND):" + (5 !=5 && true));
mostrar("Operador y logico(OR):" + (5 >= 5 || 2 < 6));

    