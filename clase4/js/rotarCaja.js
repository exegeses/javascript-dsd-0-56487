//ubicamos elemento dentro del DOM
let caja = document.getElementById('caja');

// desplazamos la caja
    caja.style.position = 'relative';
    caja.style.top = '100px';
    caja.style.left = '100px';

//variable auxiliar
let grados = 0;

//función de control
function rotar()
{
    grados = grados + 1;
    // rotacion en CSS
    //  transform: rotate( 20deg )
    caja.style.transform = 'rotate( '+grados+'deg )';
}

//invocamos función rotar
rotar();
setInterval( rotar, 25 );