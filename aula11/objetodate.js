function zeroAEsquerda (num) {
    return num >= 10 ? num : `0 ${num}`;
}

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // os meses iniciam em 0
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `today is: ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date(); //new cria algo, lembre-se de POO
const dataBrasil = formataData(data);
console.log(dataBrasil);