const fruits = [
    "apple",
    "banana",
    "cherry",
    "date",
    
]

const vegetables = [
    "carrot",
    "broccoli",
    "spinach",
    "potato",
]

fruits.push(vegetables)
console.log(fruits)
console.log(fruits[4][0]) // carrot;



const numbers = [1, 2, [3, 4, 5], 6, 7, [8, 9, 10], 11, 12]

console.log(numbers);
console.log(numbers.flat()) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(Array.isArray(numbers)) // false;