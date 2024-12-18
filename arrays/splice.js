// Splice can perform the same functions as pop, shift, push, and unshift

// I will start with a general execution and then proceed individually
// Splice allows the use of positive and negative numbers

//              -5       -4        -3        -2     -1
//               0        1         2         3      4
const names = ['Tony', 'Cesar', 'Mercosul', 'Lua', 'Ray']
const removed = names.splice(2, 2, 'Panda')
// const removed = names.splice(start, remove, add)
console.log(names);

// ____________________________________________________________

// pop: removes the last element
// const removed = names.splice(-1, 1)
// ____________________________________________________________

// shift: removes the first element
// const removed = names.splice(0, 1)
// ____________________________________________________________

// push: adds an element
// const removed = names.push('Carol')
// ____________________________________________________________

// unshift: adds an element at the beginning
// const removed = names.splice(0, 0, 'Juca')
