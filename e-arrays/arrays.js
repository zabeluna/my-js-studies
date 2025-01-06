//atribuição via desestruturacao arrays vs objetos
//ao invés de utilizar [] faço uso das {} qunado se trata de objetos

// arrays
// 0, 1 onde há 0, 1, 2 em cada
/*const numeros = [ [1, 2, 3], [1, 2, 3] ];
const [lista1, lista2] = numeros; 
console.log(lista2[2]);*/

//objetos

const pessoa = {
    nome: 'Luna',
    sobrenome: 'gata',
    idade: 1000,
    endereco: {
        rua: 'Ray gatinha',
        numero: 0,
    }
};

//forma normal, sem ser um objeto
//const nome = pessoa.nome


//atribuição via desestruturação
const {nome, ...resto } = pessoa;
console.log(resto);
