/* al pulsar un botón, tirar el dado */

//ubicamos elemento dentro del DOM
let dado = document.getElementById('dado');

//declaramos función de control
function tirarDado()
{
    //generamos un número aleatorio entre 0 y 1
    let numeroAleatorio = Math.random();
    console.log( numeroAleatorio );

    // (multiplicamos por 5) y sumamos 1
    let numeroMultiplicado = (numeroAleatorio * 5) + 1;
    console.log( numeroMultiplicado );

    // redondeamos el número a entero
    let numero = Math.round( numeroMultiplicado );
    console.log( numero );

    //mostramos imagen de dato
    dado.innerHTML = '<img src="dados/dado'+numero+'.png">';
}

//invocamos función
tirarDado();