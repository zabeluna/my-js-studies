// The map method returns a new array, but you can change the values in it (if you want to). 
// With map, the size of the array always stays the same.

const numeros = [10, 20, 30];
const duplicateNumbers = numeros.map(function(valor){
    return  valor * 2;
});

//console.log(duplicateNumbers);


/* 
For each element: 
- Return only one string with the person's name - OK
- Remove only the "name" key from the object - OK
- Add just one key, "id," to each object - OK
*/

const people = [
    {name: 'Tony', age: 10},
    {name: 'Perine', age: 52},
    {name: 'Antonieta', age: 80},
    {name: 'Jasmine', age: 22},
];

const peopleName = people.map(objeto => objeto.name);
const ages = people.map(function(objeto) {
    return {age: objeto.age}
});


console.log(ages);