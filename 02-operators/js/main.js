alert("Hola")
console.log("Hola Koder")

//console.error("Esto es un error")

//console.warn("Esto es warning")

// 3 metodos que permiten interactuar con el usuario
//1. alert("Esto es un mensaje para los koders!!")
//este es en forma de imput pero permite que el usuario escriba algo 
//let name = prompt("Ingresa tu nombre")//el tipo de dato ue regresa es un string
//console.log(name)

//tipos de operadores
/* aritmeticos, relacionales, de asignacion, incremento y decremento */
/**1.Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números 

let primerNumero = prompt("Dame un numero");
let segundoNumero = prompt("Dame otro numero");

primerNumero = Number(primerNumero)
segundoNumero = Number(segundoNumero)

let resultado = primerNumero + segundoNumero;
let resultado = primerNumero - segundoNumero;
let resultado = primerNumero * segundoNumero;
console.log(resultado)*/
//Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo. 

//*let primerNumero = prompt("Dame un numero");
//let segundoNumero = prompt("Dame otro numero");

//primerNumero = Number(primerNumero)
//segundoNumero= Number(segundoNumero)

//let resultado= primerNumero > segundoNumero;

//console.log("este es el resultado"+ resultado);

// operadores logicos
//&& and
// || or
// !value negacion

/*if(primerNumero > segundoNumero){
    console.log ("el primer numero es mayor al segundo numero")
    //se ejecuta este codigo
} else if(primerNumero === segundoNumero) {
    console.log("Los numeros son iguales")
} else {
    console.log("el primer numero es menor que el segundo")
}*/

/*if(primerNumero > segundoNumero && primerNumero > 100){
    console.log ("el primer numero es mayor al segundo numero y mayor que 100")
    //se ejecuta este codigo
}else{
    console.log("el primer numero es menor que el segundo")
}*/

//let value = undefined;

//if (!value){
    //console.log(value);
    //console.log("value es falso")
//} else {
    //console.log("value es true")
//}

//let name = prompt("como te llamas");

//if (!name){
    //console.log("no se ingreso datos")
//} else {
    //console.log("name")
//}
// TAREA 7. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//- Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
let nombre = prompt("Dime tu nombre");
let pesoActual = prompt("Dime tu peso actual en kg");
const GravedadTierra= 9.81; 
const fuerzaGravitacional = 1.622;
/*PESO JUPITER*/
const fuerzaGravitacionalJupiter = 24.79;
/**PESO MARTE */
const fuerzaGravitacionalMarte = 3.711;

nombre = String(nombre)
pesoActual = Number(pesoActual)


let resultadoLuna = pesoActual / GravedadTierra * fuerzaGravitacional;
console.log(nombre)
console.log ("Tu peso en la luna es de " + resultadoLuna + " " +" kg en la luna:D")

let resultadoJupiter = pesoActual / GravedadTierra * fuerzaGravitacionalJupiter;
console.log ("Tu peso en Jupiter es de " + resultadoJupiter + " " + "kg ")

let resultadoMarte = pesoActual / GravedadTierra * fuerzaGravitacionalMarte;
console.log ("Tu peso en Marte es de " + resultadoMarte + " " + "kg")


