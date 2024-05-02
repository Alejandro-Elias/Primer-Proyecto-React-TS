"use strict";
let numero1 = 2;
let numero2 = 2;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2)
        console.log('numero 1 gana');
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('numero 2 gana');
}
jugar(numero1, numero2);
