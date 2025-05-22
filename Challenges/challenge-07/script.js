

function frizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0 ) {
            console.log("Buzz");
        }

        console.log(i);
    }
}

const fruits = ['Apple', 'Banana', 'Grape', 'Orange']

for (const fruit in fruits) {
    console.log(fruits[fruit]);
}

frizzBuzz()