/* 
In code, there are dynamic and static values.
Static values (when I can access literal states): "", '', 12345, and other forms. I, the code creator, define these values directly in the code.
Dynamic values (when the user inserts the value into my program, for example: when the user fills out a form, my program will receive the data and be prepared to process it).
*/

/* Now, you deserve to know that objects can contain methods. Methods are functions inside objects that can execute actions. */

// In OOP (Object-Oriented Programming), I can access an object using keys. The object stores all the properties, and the keys are their names, like this:

/* const person = {
    name: 'Lua',
    age: '10'
};

const key = 'name';

// Static access
console.log(person.name);

// Dynamic access
console.log(person[key]); */

// Example 1: Object with methods
const figure1 = new Object();
figure1.name = 'Ray';
figure1.age = '00';
figure1.callYourName = function() {
    return `${this.name} is calling your name.`;
};
// I can manipulate the function too
figure1.getAge = function() {
    const date = new Date();
    return date.getFullYear() - this.age;
};

console.log(figure1.name);
console.log(figure1.age);
figure1.callYourName();
console.log(figure1.getAge());

// Example 2: Object literal
const figure2 = {
    name: 'cute-girl',
    age: 'probably 20',
};

console.log(figure2.name);
console.log(figure2.age);
