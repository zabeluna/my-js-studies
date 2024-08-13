const hora = 45
if (hora <= 11) {
  console.log('Morning!!!!')
} 

else if (hora >= 12 && hora <= 17) {
  console.log('Ops ><...')
}

else if (hora >= 18 && hora <= 23) {
  console.log('Byeeee!')
}

else if (hora > 24) {
  console.log('whaT? ')
}

// if pode vir sozinho
// else precisa de um if, pois vem dps de checar algo
// só posso ter um else na checagem, else != elfe if

/* const hora = 45
if (hora <= 11) {
  console.log('Morning!!!!')
} 

else {
  console.log('Ops ><...')
}
*/