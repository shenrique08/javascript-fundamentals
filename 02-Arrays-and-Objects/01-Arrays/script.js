
const numbers = [234, 43298, 42, 34, 43]

const fruits = new Array("Apple", "Orange", "Mango")

const mixedTypes = new Array("String", 234, true, null)


// add element s to the end of the array
fruits.push("Banana")
// add element s to the beginning of the array
fruits.unshift("Grapes")
fruits.sort()

console.log(fruits);
console.log(numbers)

console.log(mixedTypes);
console.log(fruits.filter(fruit => fruit.length > 5));

console.log(fruits.includes("Apple"));
