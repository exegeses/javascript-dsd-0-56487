// pedirle al usuario que ingrese un número
//let numero = prompt('ingresa un número');
let numero = parseInt( prompt('ingresa un número') );

/* 
    si el número es menor que 100
    mostrar un texto que diga 'es menor'

    si no lo es
    mostrar un texto que diga 'NO es menor'
*/

if ( numero < 100 ){
    document.write('El número es menor');
}
else{
    document.write('El número NO es menor');
}