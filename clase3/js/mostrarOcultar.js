//ubicar elemento dentro del DOM
let caja = document.getElementById('caja');

//declaramos funciones de control
function ocultar()
{
    //display:none
    caja.style.display = 'none';
}
function mostrar()
{
    //display:block
    caja.style.display = 'block';
}

function mostrarOcultar () {
    if ( caja.style.display == 'none' ) {
        //caja.style.display = 'block';
        mostrar();
    } else {
        //caja.style.display = 'none';
        ocultar();
    }
}