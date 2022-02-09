// array de nombres de imágenes
let fotos = [
                'solsteiz', 'maiten', 'gery',
                'maqui', 'lu', 'dani',
                'anto', 'marco', 'bruno',
                'killq', 'marce', 'marco2'
            ];
let cantidad = fotos.length;

//ubicar el elemento a controlar dentro del DOM
let galeria = document.querySelector('#galeria');
//let galeria = document.querySelector('section');

let contenido = '';

for ( let i = 0; i < cantidad; i++ ) {
contenido = contenido + '        <article>\n' +
            '            <img src="fotos/'+fotos[i]+'.png">\n' +
            '        </article>';
}

galeria.innerHTML = contenido;
