//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//textos y traducciones
let espanol = '<img src="imagenes/spain.png" style="width:24px"> En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.';
let frances = '<img src="imagenes/france.png" style="width:24px"> Dans un endroit de La Mancha, dont je ne veux pas me souvenir du nom, il n\'y a pas si longtemps vivait un noble avec une lance dans un chantier naval, un bouclier à l\'ancienne, un rocín maigre et un lévrier en fuite.';
let ingles = '<img src="imagenes/uk.png" style="width:24px"> In a place of La Mancha, whose name I don\'t want to remember, not long ago there lived a nobleman with a lance in a shipyard, an old-fashioned buckler, a skinny rocín and a running greyhound.';


//asignamos un contenido de texto al p
txt.innerHTML = espanol;

