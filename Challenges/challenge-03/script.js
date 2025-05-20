
const array = [1, 2, 3, 4, 5];

array.push(6);

array.reverse();
console.log(array);

const array2 = [6, 5, 4, 3, 2, 1];
array2.push(0);

array2.sort();
console.log(array2);

const array3 = array.concat(array2);
console.log(array3);