// 1.Dado un string de palabras, devolver la palabra más larga.
  /* - INTRODUCIR UN STRINIG
     - CONTAR LAS PALABRAS
     - VERIFICAR CUAL ES LA PALABRA MAS LARGA
     - IMPRIMIR LA PALABRA MAS LARGA*/
let string = "El sabado tendremos un convivio";

function palabraMasLarga(string) {
	let palabra = string.split(' ');
	let resultado = "";
	
	for (let i = 0; i < palabra.length; i++) {
		if (palabra[i].length > resultado.length) {
			resultado = palabra[i];
		};
	};
	  return resultado;
};

console.log(palabraMasLarga(string));

console.log("----OK----")

/*2.Crear un programa que permita detectar si una frase finaliza con punto.*/
 /* -declarar la variable con la frase
    - Hacer una funcion que llame la frase
    - hacer una condicional que si la frase termina con punto devuelva true
    - y si no termina en punto deuelva false*/
// let frase = "Si se puede imaginar, se puede programar."
// frase.indexOf(".")

// 3.Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca

// 4.Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.

// 5.Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.

// 6.Crear un programa que permita a una cadena de texto muestra el caracter '-' ebtre cada caracter de la cadena.
let cadenaTexto = "El sabado tendremos un convivio";
let separadorCaracter = cadenaTexto.split(" ");
console.log(separadorCaracter);


// 7.Sabiendo que una cadena de texto contiene parentesis. Crear un programa qye me devuelva la cadena que se encuetra entre los parentesis.