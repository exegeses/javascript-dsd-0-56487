//ubicar elemento dentro del DOM
let caja = document.querySelector('#caja');

// declaración de función
function rotar ( grados )
{
    //   rotate( 20deg )
    caja.style.transform = 'rotate('+grados+'deg)';
}

function cambiarColor( codigo )
{
    caja.style.backgroundColor = codigo;
}


//llamado a la función
rotar( 2);