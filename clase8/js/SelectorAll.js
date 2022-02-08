//ubicar elemento/s dentro del DOM
let LIS = document.querySelectorAll('li');
console.log(LIS);
let cantidad = LIS.length;
/*
LIS[0].style.backgroundColor = '#99ef99';
LIS[1].style.backgroundColor = '#99ef99';
LIS[2].style.backgroundColor = '#99ef99';
LIS[3].style.backgroundColor = '#99ef99';
LIS[4].style.backgroundColor = '#99ef99';
LIS[5].style.backgroundColor = '#99ef99';
*/

for ( let n = 0; n < cantidad; n++ ){
    LIS[n].style.backgroundColor = '#99ef99';
}