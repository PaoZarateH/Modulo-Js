alert("Hola")
/* Ejercicio 1: solicitar al usuario su nmbre y sus apellidos
regresar en una sola cadena donde el el nmbre sea en inusculas  los apelidos en minusculas*/



let nombre = prompt("Dime tu nombre")
let ape = prompt("Dime tus apellidos")
nombre = nombre.toLowerCase()
ape = ape.toUpperCase()

console.log("El formato correcto de tu nombre es " + " " + nombre +  " " + ape)

// function  nombreCompleto (nombre, APELLIDO) {
//     tuNombre = nombre.toLowerCase()
//     tuApellido = apellido.UpperCase()

//     return "Tu nombre es" + tuNombre + tuApellido
// }
// // let resultadoNombre = nombreCompleto ()
// // console.log(resultadoNombre)
/* Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre*/
    // let nombreCompleto = prompt ("Ingresa tu nombre completo")
    // nombreCompleto = nombreCompleto.length
    // console.log("Tu nombre tiene" + " " + nombreCompleto + "caracteres.")

    /*Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.*/
    // let vocales = nombreCompleto.match(/[aeiou]/gi).length
    // console.log("Tu nombre completo tiene" + " " + vocales + " " + "vocales")

    /*Ejercicio 4: Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario*/
    let message = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
    message = message.length;
    message = message.replace("estudiante", "Koder");
    console.log(message);
    
    /*Ejercicio 5: Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"*/
    let string1 = "Some large string"
    let string2 = "El string {string1} es el mas largo"
    if (string1 > string2){
        console.log(string1 + "es mayor que string2")
    }else {
        console.log(string2 + "Es mayor que string1")
    }

    /*Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'*/
    function palabraLarga (input , Output){
        let input = `Programación Javascript`
        let Output = `Programacion`
        
        return palabraLarga
    }

