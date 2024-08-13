//por cópia: ele copia o valor e morre ali, mesmo que o anterior se altere
let a = 2;
const b = a;
console.log(a, b);

// irá imprimir 2 e 2

a = 3

console.log(a, b);

// irá imprimir 3 e 2, porque a foi alterado e b é uma cópia do primeiro valor, ou seja, copiou e morreu/parou ali mesmo


