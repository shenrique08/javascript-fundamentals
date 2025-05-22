// C = (F - 32) * 5 / 9

function getCelsius(temperatureFahrenheit) {
    return ((temperatureFahrenheit - 32) * 5) / 9
}


console.log(getCelsius(32));



const minAndMax = (...arr) => {
    arraySorted = arr.sort()
    console.log("Min is " + arraySorted[0]);
    console.log("Max is " + arraySorted[arraySorted.length - 1]);
}

minAndMax(32, 32, 54, 2, 1, 54, 88)
