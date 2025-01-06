/* um ternário significa algo dividido em três. Nesse caso, nossa estrutura seria da
seguinte maneira: (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
? e : são meus operadores */


const pontuacaoUsuario = 700;

/*então, ao invés de contruir um código longo, como esse:

if (pontuacaoUsuario >= 1000) {
console.log('Usuário VIP');
} else {
 console.log('Usuário normal');
 }

 podemos simpolificar da seguinte maneira: */

 const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
 console.log(nivelUsuario);