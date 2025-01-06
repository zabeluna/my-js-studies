
// let num1 = prompt('Digite um número:'); /* para aparecer na página */
// let num2 = prompt('Digite outro número:');

// num1 = Number(num1); /* Se eu não declarasse num1 como Number, seria lido como uma string */
// num2 = Number(num2);

// eu poderia declarar uma const para fazer a conta e adicionar o resultado, nome da const, na string que será exibida
//no entanto, irei deixar de forma implicíta

// alert('O resultado da sua conta foi: ${num1 + num2}');
const swithKey = 'value'
switch (swithKey) {
    case 'value':
        console.log('oi');
        break;
    case 'default':
        console.log('key');
        break;
    default:
        break;
}

const object = {
    luna() {
        console.log('luna')
    },
    dani() {
        console.log('dani')
    }
}
const objKey = 'luna'
console.log(object[objKey])
const exec = object[objKey];
exec();
