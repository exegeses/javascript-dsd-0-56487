//ubicamos elementos dentro del DOM
let txtDias = document.getElementById('txtDias');
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');

//declaramos función de control
function countDown()
{
    //objetos de fecha
    let ahora = new Date();
    let final = new Date( 2022, 6, 21 );
    //convertimos a milisegundos timestamp
    let actual = ahora.getTime();
    let evento = final.getTime();

    //calculamos tiempo restante en milisegundos
    let restante = evento - actual;

    //averiguamos los segundos, minutos, horas y días (sin decimales)
    let segundos = Math.floor( restante/1000 );
    let minutos  = Math.floor( segundos/60 );
    let horas    = Math.floor( minutos/60 );
    let dias     = Math.floor( horas/24 )

    console.log(segundos);
    console.log(minutos);
    console.log(horas);
    console.log(dias);

    //sobrantes de horas, minutos y segundos utilizando módulo (%)
    horas    = horas % 24;
    if ( horas < 10 ){
        horas = '0'+horas;
    }
    minutos  = minutos % 60;
    if( minutos < 10 ){
        minutos = '0'+minutos;
    }
    segundos = segundos % 60;
    if ( segundos < 10 ){
        segundos = '0'+segundos;
    }

    console.log(horas);
    console.log(minutos);
    console.log(segundos);

    //imprimimos en las cajas de texto
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

countDown();
setInterval( countDown, 1000 );