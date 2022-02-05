//ubicamos elementos dentro del DOM
    // cajas input
let n1 = document.querySelector('input[name="n1"]');
let n2 = document.querySelector('input[name="n2"]');
    // span
let txt = document.querySelector('#txt');

//declaración de funciones
function calcular( operacion )
{
    let resultado = 0;
    //capturamos valores ecritos en los input
    let valorN1 = parseInt(n1.value);
    let valorN2 = parseInt(n2.value);

    if( operacion == 'suma' ){
        resultado = suma( valorN1, valorN2 );
    }
    else if( operacion == 'resta' ){
        resultado = resta( valorN1, valorN2 );
    }
    txt.innerText = resultado;
}

function suma( op1, op2 ){
    let resultado = op1 + op2;
    return resultado;
}
function resta( op1, op2 ){
    let resultado = op1 - op2;
    return resultado;
}