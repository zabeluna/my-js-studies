// ao invés do if, podemos utilizar o S.C.
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
// o código certo está embaixo
switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        break;

    case 1:
        diaSemana = 'Segunda';
         break;

    case 2:
        diaSemana = 'Terça';
        break;

    case 3:
        diaSemana = 'Quarta';
        break;

    case 4:
        diaSemana = 'Quinta';
        break;
        
    case 5:
        diaSemana = 'Sexta';
        break;

    case 6:
        diaSemana = 'Sábado';
        break;
}

}

const data = new Date('2004-10-22 15:55:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

// posso não utilizar o break, pois o código se encerra ao returnar um valor
/* ficaria assim: 

function getDiaSemanaTexto (diaSemana) {
let diaSemanaTexto

switch (diaSemana) {
case 0: 
diaSemanaTexto = 'Domingo';
return diaSemanaTexto;

case 1: .........
} */
