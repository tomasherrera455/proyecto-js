// tipos de variables 
// var numero =4; = no se utiliza por actualizar 
let saludo = "saludo";
const pi = 3.1416;

// tipos de datos
//numeros

 let entero = 10;
 let decimal = 3.1416;

//string = texto
let pregunta = "¿Que hora es?"
let respuesta = 'son las 4 pm'
 
//boolean
let esMayordeedad = true;
let tienepermiso = false;

//undefine
let valor;
console.long(valor); //undefine

//null
let nota = null;

let persona= {
    nombre: "juan",
    edad: 30,
    estrabajador: true,
    habilidades:{
        produccion: 5.0,
        empaque: 3.0,
    },
};
//arreglos
let numeros = [1, 2, 3, 4, 4, 5, 6, 5, 67, 0]
let frutas = ["manzanas","peras","sandia"]

//operadores aritmeticos
//suma +
let suma = 5 + 4; //9
//resta -
let resta = 5 - 4; //1
//multiplicacion *
let multiplicacion = 5 * 4; //20
//division /
let division = 5 / 4; //1.25
//modulo %
let modulo = 10 % 3; //1 (el resultado sobrante de la division)

//operadores de asignacion
//igual =
let numero = 5;
//suma y asigna +=
numero += 3; // equivale a numero + 3 y ahora su valor es 8
//resta y asigna
numeros -= 2; // equivale a numero 3

//operadores de comparacion
//igualdad debil ==
let resultado = ( 5 == "5" ); //true
//igualdad estricta ===
respuesta = ( 5 === "5" ); //false
//diferente debil !=
resultado = ( 23 != "23") //false
//diferente estricta !==
resultado = ( 30 !== 50 ) //true

//mayor que >, menor que <, mayor o igual >=, menor o igual <=
let esMayor = (10 > 5); //true
let esMenor = (5 < 3); //false
let mayorOIgual = (10 >= 5) //true
let menorOIgual = (5 <= 3) //false

//operadores logicos 
// y logico &&
let resultados = (5 > 3) && (17 < 10); //false
//o logico ||
resultados = (5 > 3) || (17 < 10); //true
//no logico !
let esFalso = ! (5 > 10); //true (porque 5 > 10 es false, entonces !false es = true)



