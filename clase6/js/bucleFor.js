//declaramos el array
let italianos = [
                    'Masseratti', 'Pagani',
                    'Lamborghini', 'Ferrari',
                    'Alfa Romeo', 'Alpine',
                    'Abarth', 'Mazzanti',
                    'Bugatti', 'Lancia',
                    'Fiat', 'Fornasari'
                ];
let cantidad = italianos.length;

document.write('<ul>');
for ( let n = 0; n < cantidad; n++ )
{
    document.write('<li>'+ italianos[n] +'</li>' );
}
document.write('</ul>');
