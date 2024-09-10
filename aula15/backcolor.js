const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let paragrafos of ps) {
    paragrafos.style.backgroundColor = backgroundColorBody;
    paragrafos.style.color = '#FFFFFF';
}