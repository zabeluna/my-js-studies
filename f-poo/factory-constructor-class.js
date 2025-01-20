// Factory Functions (funções de fábrica)

function createFigure(name, surname) {
    return {
        name,
        surname,
        completeName() {
            return `${this.name} ${this.surname}`; 
        }
    };
}

const f1 = createFigure('Ray', 'Blue');
console.log(f1.completeName()); 

/* (new NameFunction) The difference between both is that JavaScript changes the behavior of the function */

// Constructor Functions
// In the console, the constructor will appear before the objects, meaning it shows who created the object before the objects themselves.
// new = The keyword "new" creates an empty object {} and attaches <- the keyword "this" to that object: { <- this.something } or {} <- this.something

function Figure(name, surname) {
    this.name = name;
    this.surname = surname;
}

const f2 = new Figure('cute', 'girl');
console.log(f2);
