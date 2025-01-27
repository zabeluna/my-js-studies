/*
 valores passados por referencia:

Object.keys
Object.values
Object.entries
Object.assign
Object.defineProperty
Object.getOwnPropertyDescriptor
Object.freeze
Object.defineProperties
Object.defineProperty
*/

//How can i have the same value just copied, without apoint = {...SpreedOPerator}
const books = {name: 'Cesar Bravo', value: 70};
const otherBook = {...books, pages: '8347'};

otherBook.name = 'James';
otherBook.value = 150;
console.log(books);
console.log(otherBook);