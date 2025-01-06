let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//const varA = varB;
//console.log(varA, varB, varC);

const letras = [b, c, a]; // quero imprimir nessa ordem
[a, b, c] = letras;
console.log(a, b, c);
