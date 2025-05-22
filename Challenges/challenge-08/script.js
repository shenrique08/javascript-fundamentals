
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 35 },
    { name: "Jack", age: 40 },
    { name: "Jill", age: 45 },
    { name: "Joe", age: 50 },
    { name: "Jerry", age: 55 },
    { name: "Jess", age: 12 },
    { name: "Jasmine", age: 65 },
    { name: "Jordan", age: 21 },
    { name: "Jared", age: 75 },
    { name: "Jenna", age: 17 },
    { name: "Jocelyn", age: 15 },
    { name: "Jules", age: 90 },
    { name: "Jasmine", age: 5 },
    { name: "Jett", age: 50 },
]

const peopleUnder30 = people.filter(person => person.age < 30);
console.log("People under 30: \n");
peopleUnder30.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
});

const capitalizedNames = people.map(person => person.name.toUpperCase());
console.log("\nCapitalized names: \n");
capitalizedNames.forEach(name => {
    console.log(name);
});


const numbers = [34, -2, 23, 0, -1, 2, 5, -3, 6, -4, 7, -5, 8, -6, 9, -7];
const positiveNumbers = numbers.filter(number => number > 0);
console.log("\nPositive numbers: \n");
positiveNumbers.forEach(number => {
    console.log(number);
});

