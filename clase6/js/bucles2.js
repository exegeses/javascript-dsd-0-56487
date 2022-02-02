//declaramos el array
let italianos = [
    'Masseratti', 'Pagani',
    'Lamborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine',
    'Abarth', 'Mazzanti',
    'Bugatti', 'Lancia',
    'Fiat', 'Fornasari'
];
//document.write(italianos[0]);
let n = 0;
let cantidad = italianos.length;
document.write('<ul>');
while( n < cantidad )
{
    document.write( '<li>'+ italianos[n] +'</li>');
    n++; // incremento
}
document.write('</ul>');

