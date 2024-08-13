/*
* não pode criar constantes com palavras resercadas
* é interessante que tenham nomes significativos, pois ajuda na leitura
* não pode começar com números nem conter espaços ou traços
* camelCase e Case-sensitive
* não podemos modificar o valor de constantes
* utilize const, não var (com ela você pode declarar e redeclarar tranquilamente, mas pode ocasionar em problemas na leitura no código pelo editor)
*/

const firstName = "Izabelle";
const secondName = "Luna";
const resultado = firstName + secondName;
const resultadoResto = resultado + Nanes;
// perceba que você precisou adicionar uma nova const para cada caso, agora veja com a let
let resultadoCompleto = resultadoResto + de;
//veja, irei adicionar uma nova variavel em cima da anterior sem precisar adicionar nada
// ou seja, não preciso do let diversas vezes, apenas declaro uma vez e posso substituir utilizando o nome da variavel. com a constante const 
// eu precisaria declarar todas as vezes.
resultadoCompleto = resultadoCompleto + Luna;

console.log(resultadoCompleto);
