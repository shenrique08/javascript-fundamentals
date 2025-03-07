function verify() {
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    var fYear = document.getElementById('age')
    var result = document.querySelector("div#result")
    var img = document.getElementById('photo')

    if (fYear.value.lenght == 0 || Number(fYear.value) > currentYear) {
        alert('ERROR')
    } else {
        var fSex = document.getElementsByName('sex')
        var age = currentYear - Number(fYear.value)
        var gender = ''

        if (fSex[0].checked) {
            gender = 'Male'
        } else {
            gender = 'Female'
        }

        if (age >= 0 && age <= 25) {
            img.src = 'imagens/young.jpg'
        } else if (age > 25 && age < 45) {
            img.src = 'imagens/middle-age.jpg'
        } else {
            img.src = 'imagens/mature.jpg'
        }

        result.innerHTML = `${gender} with ${age}`

    }
}