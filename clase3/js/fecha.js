//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//mostrar la fecha actual
// con formato 21/01/2022

//creamos un objeto de fecha y lo guardamos en un variable
let fecha = new Date();

//obtenemos el número del día del mes
let diaMes = fecha.getDate();
//obtenemos el número del mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0' + mes;
}

//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos dato en el span txt
txt.innerText = diaMes + '/' + mes + '/' + anio;
