const elementos = [
    {tag: 'p', texto: 'nuna'},
    {tag: 'div', texto: 'oi'},
    {tag: 'section', texto: 'va'},
    {tag: 'footer', texto: 'mimir'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
   // console.log(elementos[i].tag);
   //agora, vou concluir desestruturando
   let{tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
   let textoCriado = document.createTextNode(texto);

   tagCriada.appendChild(textoCriado);
   div.appendChild /*insere um novo nó na estrutura do DOM de um documento*/ (tagCriada);
}

container.appendChild(div);
