// differences between for, for in and for of

const nome = [arya, luna, danda];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('separação');

// indice
for (let i in nome) {
    console.log(nome[i]);
}

console.log('separação');

for (let valor of nome) {
    console.log(valor);
}

