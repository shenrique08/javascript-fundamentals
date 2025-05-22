
function sayHowdy () {
    console.log("Howdy");
}

sayHowdy()

function addNumbers(num1, num2) {
    return num1 + num2
}

console.log(addNumbers(2, 3));



function registerUser(user = "Bot") {
    return user + " is registered"
}

console.log(registerUser());
console.log(registerUser("Henrique"));