alert("Hola")
// console.log (EJERCICIO1.OK)
/* Ejercicio 1: solicitar al usuario su nmbre y sus apellidos
regresar en una sola cadena donde el el nmbre sea en inusculas  los apelidos en minusculas*/

// let nombre = prompt("Dime tu nombre")
// let ape = prompt("Dime tus apellidos")
// nombre = nombre.toLowerCase()
// ape = ape.toUpperCase()

// console.log("El formato correcto de tu nombre es " + " " + nombre +  " " + ape)

// function  nombreCompleto (nombre, APELLIDO) {
//     tuNombre = nombre.toLowerCase()
//     tuApellido = apellido.UpperCase()

//     return "Tu nombre es" + tuNombre + tuApellido
// }
// let resultadoNombre = nombreCompleto ()
// console.log(resultadoNombre)

// console.log (EJERCICIO2.OK)
// /* Ejercicio 2:
//     Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre*/
    // let nombreCompleto = prompt ("Ingresa tu nombre completo")
    // nombreCompleto = nombreCompleto.length
    // console.log("Tu nombre tiene" + " " + nombreCompleto + "caracteres.")

// console.log (EJERCICIO3.OK)
//     /*Ejercicio 3:
//     Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.*/
    // let vocales = nombreCompleto.match(/[aeiou]/gi).length
    // console.log("Tu nombre completo tiene" + " " + vocales + " " + "vocales")

// console.log (EJERCICIO4-OK)
//     /*Ejercicio 4: Del texto: 
//     "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
//     al estudiante que tiene a su lado"
//     - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
//         por la palabra "Koder", 
//     - y mostrar el mensaje de nuevo al usuario*/
    // let message = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
    // let student = message.match(/estudiante/gi).length
    // console.log ( `En el mensaje la palabra "estudiante" se repite ${student} veces `)
    // let newMessage= message.replace(/estudiante/gi , "Koder")
    // console.log(newMessage);



// console.log (`--EJERCICIO5-OK-`)   
//     /*Ejercicio 5: Comparar 2 string, y determinar cual de los dos es el más largo
//     input: "string 1", "Some large string"
//     Output: "el string {string 1} es el más largo"*/
// let string1 = "Some large string";
// let string2 = "El string 1 es el mas largos";
// function comparacion (string1, string2) {
//     if (string1.length < string2.length){
//         return "El string1 es mayor";
//     }else {
//         return "El string2 es mayor"
//     }
// }
// console.log(comparacion(string2,string1));
    
// console.log ("-EJERCICIO6-OK")
//     /*Ejercicio 6:
//     Dado un string de dos palabras realizar una función que devuelva la palabra más larga
//     input: 'Programación Javascript'
//     Output: 'Programación'*/
//     function palabraLarga (input , Output){
//         let input = `Programación Javascript`
//         let Output = `Programacion`
          
//         return palabraLarga
//     }
// let twoWords = "Programacion Javascript"
// function longestWord (strings){
//     let str = strings.split (" ")
//     return str[0].length > str[1].length ? str[0] : str[1]
// }
// console.log(`Del string "Programacion Javascript" (${twoWords}), la palabra mas larga es: ${longestWord(twoWords)}`)
// console.log("------------SEGUNDA PARTE----------------")
/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'*/
/*-poner una variable la palabra que se buscara
-poner en otra variable la frase que el usuario ingresara
-verificar cuantas veces se encuentra la palabra a uscar en la frase
y arrojar cuantas veces esta presente la palabra
y si no es asi, arrojar que no se encontro coincidencia*/
// function coincidencias (frase, palabra){
//     regexp = new RegExp (palabra,`gi`)
//     let busc = frase.match(regexp)
//     console.log(`El numero de coincidencias de ${palabra} son ${ busc.length} veces`)
// }
// let getfrase = prompt("Introduce tu frase")
// let palabra = prompt("Introduce la palabra a buscar")
// coincidencias(getfrase,palabra)
// // /*
//     Crear una funcion o funciones que permitan elegir al usuario
//     una operacion basica, indicar dos valores y ejecutar la operacion 
//     seleccionada. imprimir el resultado
//     output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
//     "suma", 20,10 -> La suma de 20 y 10 es 30
// */
function operations(numero1, numero2, operation) {
    let result
    switch(operation){
        case"suma":
        result = numero1 + numero2
        break;
        case"resta":
        result = numero1 - numero2
        break;
        case"multiplicacion":
        result = numero1 * numero2
        break;
        case"division":
        result = numero1 / numero2
        break;
        default:
            result ="no existe esta operación"
            break;

    }
    return `El resultado de la operacion "${operation}"" de los numeros es: ${result}`;
}

let operationChoiced = prompt ("Ingresa que opercion quieres realizar opcion1=suma /n opcion2=resta opcion3=multiplicación opcion4= division")
let number1= parseInt(prompt("ingresa el valor de numero 1"))
let number2= parseInt(prompt("ingresa elvalor de  numero 2"))

operations (number1, number2, operationChoiced)