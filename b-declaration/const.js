

/*
* You cannot create constants with reserved words.
* It's recommended to use meaningful names as it helps with readability.
* They cannot start with numbers, nor contain spaces or hyphens.
* Use camelCase, and remember they are case-sensitive.
* The value of constants cannot be modified.
* Use `const`, not `var` (with `var` you can declare and redeclare easily, but it may cause readability issues in the code editor).
*/

const firstName = "Izabelle";
const secondName = "Silva";
const resultado = firstName + secondName;
const resultadoResto = resultado + "Nanes";
// Notice that you needed to add a new constant for each case. Now see how it works with let.
let resultadoCompleto = resultadoResto + "de";
// Look, I can add a new value to the previous variable without needing to declare anything new.
// In other words, I don’t need to use let multiple times. I only declare it once and can replace it using the variable name. 
// With the const constant, I would need to declare it every time.
resultadoCompleto = resultadoCompleto + "Luna";

console.log(resultadoCompleto);