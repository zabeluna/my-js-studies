function creatTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

console.log(creatTimeSeconds(10));

const relogio = documento.querySelector('.relogio');
const start = documento.querySelector('.start');
const breaker = documento.querySelector('.break');
const restart = documento.querySelector('.restart');
let segundos = 0;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = creatTimeSeconds(segundos);

    }, 1000);
}

start.addEventListener('click', function(event){

});

breaker.addEventListener('click', function(event){

});

restart.addEventListener('click', function(event){

});