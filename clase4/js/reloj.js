// mostrar un reloj digital
// con formato:  20:17:48

//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//declaramos funciones de control
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();

    //obtenemos horas
    let horas = fecha.getHours();
    //obtenemos minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+minutos;
    }
    //obtenemos segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+segundos;
    }

    //imprimimos info en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}
//invocamos función reloj()
reloj();
//actualizamos llamado a la función reloj()
setInterval( reloj, 1000 );