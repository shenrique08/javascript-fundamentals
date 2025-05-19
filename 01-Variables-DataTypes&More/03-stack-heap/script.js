
// values are stored on the stack memory

const name = "Sergio Henrique"
const age = 28


// reference values are store on heap memory

const person = {
    name: 'Sergio',
    age: 28
};


let newPerson = person;
console.log(person);

newPerson.name = "Sergio Henrique"
console.log(person);

