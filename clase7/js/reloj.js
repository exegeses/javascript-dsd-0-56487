let txtHoras = document.querySelector('#txtHoras');
let txtMinutos = document.querySelector('#txtMinutos');
let txtSegundos = document.querySelector('#txtSegundos');
let txtSeparador = document.querySelectorAll('.txtSeparador');
let cantidad = txtSeparador.length;

let segundos = 0;
let minutos  = 0;
let horas    = 0;

function reloj()
{
    segundos++;  //incremento
    txtSegundos.innerText = dosDigitos( segundos%60 );
    minutos = Math.floor( segundos/60 );
    txtMinutos.innerText = dosDigitos( minutos%60 );
    horas = Math.floor(minutos/60 );
    txtHoras.innerText = dosDigitos(horas);
    for( let n = 0; n < cantidad; n++ ){
        txtSeparador[n].innerText = blinker( segundos );
    }
}

function dosDigitos( numero )
{
    if ( numero < 10 ){
        numero = '0'+numero;
    }
    return numero;
}
//para los dos puntos parpadeantes
function blinker( num )
{
    let separador = ' ';
    if( num%2 == 0 ){
        separador = ':';
    }
    return separador;
}


setInterval( reloj, 1000 );