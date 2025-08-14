//Variables 
//var (evitar usarla)
//scope

console.log (age)

var name = "Dayana"
console.log(name)

function dayana() {
    var age =15; 
    console.log(age);
}

var age = 19;
dayana();
console.log(age)

//age:no existe
//hoisting

//let 
// let no permite redefinir
//console·log(sexo); //error


let sexo = ("femenino");
//scope : bloque {...aqui...}
function mostrarGenero() {
    console.log (sexo);
    let gender = sexo;
    const OTRA = "otra";
}
sexo = 'Uno Nuevo'
console.log (sexo);

mostrarGenero();
//console.log(gender);

//const
const ROL_USUARIO = "user";
const OTRA = "otro valor";
//const ROL_USUARIO = "otro"; //EROR


//Nomenclatura y convenciones
let camelcase = 1;
let nombreUsuario = "Dayana"
let rolUsuarioplataforma = 'programadora'

let snake_case = 1;
let nombre_usuario = "Dayana"
let rol_Usuario_plataforma = "programadora"

const SCREAMIG_CASE = 1;
const NOMBRE_USUARIO = 'Dayana'
const ROL_USUARIO_PLATAFORMA = "programadora"



//tipos de datos primitivos
//number
let numero = 0/0;
console.log(typeof numero);

//string
let texto = "a1"+1;
console.log(typeof texto);

//boolean
let esMayorQueYo = false;
console.log(typeof esMayorQueYo);

//null
let tarjetasDeCredito = null;
console.log (typeof tarjetasDeCredito);

//undefined
let mimir;
console.log(mimir);

//tipos de datos complejos o de diferencia
//objet

let informacion = {
    nombre: "Maicol",
    edad: 20,
    caidas:1,
    perros: [
        {
            nombre: "Mailo",
            genero: "Macho"
        }
    ],
    mordidas: true
}

console.log(typeof informacion);

//Arrays

let caidas = [
    {
        fecha: '2025-08-10',
        damages: 'mental'
    },
    {
        vehiculo:'motocicleta'
    },
    true,
    'otros valores'
    [1,2,3,4,5,6,7,8]
];

console.log(typeof caidas)

//Conversiones

//ToString
let esMayor = true;
let edadDeMayor = 20;
console.log(typeof esMayor);
console.log(typeof edadDeMayor);

esMayor = String(esMayor);
console.log(typeof esMayor);
edadDeMayor = String(edadDeMayor);
console.log(typeof edadDeMayor)

let baloto = "23456789";
console.log(typeof baloto);
baloto = Number ("23456789");
console.log (typeof baloto);

//Interpolacion de variables
let mensaje = 'Hola, mi nombre es '  +nombreUsuario + ' y yo gane con el baloto N '
 + baloto + ' y mi edad es ' +edadDeMayor;

let mensajechido = `Hola, mi nombre es ${nombreUsuario} y yo gane con el baloto N ${baloto} y mi edad es ${edadDeMayor}`;

console.log(mensaje);
console.log(mensajechido);










