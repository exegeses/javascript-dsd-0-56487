/*
    pedir al usuario que ingrese un número
        y a ese número lo guardamos en una variable

    pedir al usuario que ingrese otro número
        y a ese segundo número lo guardamos en otra variable

    realizar la suma de variables
        mostrar el resultado
*/

let num1 = prompt('Ingresa un número');
let num2 = prompt('Ingresa otro número');

//vamos a utilizar la función parseInt()
let suma = parseInt(num1) + parseInt(num2);

document.write("El resultado es " + suma);

