
// let str = "kodemia"
// let lengthStr = str.length

// let result = ""

// for(let index=0; index < lengthStr; index++) {
//     if (index % 2 ===0) { // check if par
//         result += str.charAt(index).toUpperCase()
//     }else {
//         result += str.charAt(index).toLowerCase()
//     }
// }
// console.log(`Input: `, str)
// console.log(`Output`, result)

console.log("----------------------")
/*Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
*/



console.log("--------OK-------------")
// Ejercicio 2:
//     Pedir al usuario usuario un numero entre 1 y 10
//     Imprimir la tabla de multiplicar de ese número
//     p.ej.
//     3 x 1 = 3
//     3 x 2 = 6

// let number = prompt ("Type a number between 1 and 10")
// let result = ""

// for (let index =1; index <=10; index ++){
//     result = `${index} * ${number} = ${index * number}`
//     console.log(result)
// }

console.log("--------OK--------------")
// Ejercicio 3:Pedir al usuario un numero entre 10 y 100
// Imprimir todos los numeros pares que existen entre 1 y ese numero
/* 1. INICIO- pedir al usuario un numero entre el 10 y 100
   2. definir  como 0 numero inicial par 
   3. definir el resultado como una variale final
   4. incrementar nuestra variable
   5.hacer operacion que cada numero del 0 al nuestro valor de resultado sea residuo de 2 para formar par
   6. imprimir resultados hasta que lleemos al numero que nuestro usuario ingreso
    .fin*/

// let numero = prompt ("Ingresa un numero entre 10 y 100")
// let result = 0


// for (let resultado = 0; resultado <=numero; resultado ++) {
//     if (resultado % 2 ===0){
//         console.log(resultado)
//     }
// }
console.log("-------OK---------------")
/*Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10*/
/* 1. INICIO- pedir digitos
   2. separar numeros para poderlos sumarlos cada uno
   3. hacer la suma de los digitos
   5. mostrar el resultado- FIN*/

// let numeros = prompt("Introduce una cifra de numeros")
// let suma = 0
// for (let i=0; i<numeros.length; i++) {
//     suma += Number(numeros[i])
// }
// console.log(suma)



console.log("----------OK------------")

/*
Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/
// let string = "**********"
// let lengthString = string.length
// let result = " "
// for (let index = 0; index < lengthString; index++) {
//     result += string.charAt(index)
//     console.log (result)
// }

console.log("----------------------")


/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/


console.log("-----------------OK-----")
/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders
*/
// let string1 = "Hola como estas"
// console.log(string1.replace(/ /g, ""))
// let string2 ="hello Koders"
// console.log(string2.replace(/ /g, ""))

console.log("----------------------")
/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/
let num1 =prompt("Dame el numero 1")
let num2 =prompt("Dame el numero 2")
let num3 =prompt("Dame el numero 3")
let num4 =prompt("Dame el numero 4")
let num5 =prompt("Dame el numero 5")
let num6 =prompt("Dame el numero 6")
let num7 =prompt("Dame el numero 7")
let num8 =prompt("Dame el numero 8")
let num9 =prompt("Dame el numero 9")
let num10 =prompt("Dame el numero 10")
console.log (`${num1}, ${num2},${num3},${num4},${num5},${num6},${num7},${num8},${num9},${num10}`)
function operacion (num5,num6,num7, num8,num9,num10){
    suma =Numero(num5 + num6 + num7 + num8 + num9 + num10) 
    console.log("La suma es: " + suma)

}