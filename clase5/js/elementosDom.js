//por su id
let txt = document.getElementById('txt');
    txt.innerText = 'ubicado por su id';
    txt.style.color = '#f60';

//por su nombre de elemento
let variosLi = document.getElementsByTagName('li');
    //esta es una HTMLCollection
    console.log(variosLi);
    variosLi[0].style.color = '#2fb949';
    variosLi[1].style.color = '#2fb949';
    variosLi[2].style.color = '#2fb949';
    variosLi[3].style.color = '#2fb949';

//por su nombre de class
let variosA = document.getElementsByClassName('enlace');
    //esta es una HTMLCollection
    console.log(variosA);
    variosA[2].style.color = '#555';
    variosA[2].style.fontWeight = 'bold';

//por su nombre de selector
let boton = document.querySelector('#boton');
    boton.style.padding = '12px 26px';

let parrafo = document.querySelectorAll('.parrafo');
    parrafo[0].style.backgroundColor = '#fff';
    parrafo[0].style.padding = '12px 20px';
    parrafo[1].style.backgroundColor = '#fff';
    parrafo[1].style.padding = '12px 20px';

let cajaTxt = document.querySelector('input[name="nombre"]');
    cajaTxt.style.padding = '8px';
    cajaTxt.style.fontsize = '22px';
    cajaTxt.style.color = '#f98d91';