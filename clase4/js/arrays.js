/*
let marca = 'Hermes';
let marca1 = 'Zara';
let marca2 = 'Uniqlo';
let marca3 = 'Armani';
*/
let marcas = [ 'Hermes', 'Zara', 'Uniqlo', 'Armani', 'Tomy' ];
console.log( marcas );

// ver segundo elemento
console.log( marcas[1] );


let txt = document.getElementById('txt');
// ver el día de la semana
let fecha = new Date();
let diaSemana = fecha.getDay();//números del 0 al 6
let diasDelaSemana = [
                        'Domingo', 'Lunes',
                        'Martes', 'Miécoles',
                        'Jueves', 'Viernes',
                        'Sábado'
                     ];
//mostra día de la semana
txt.innerText = diasDelaSemana[ diaSemana ];