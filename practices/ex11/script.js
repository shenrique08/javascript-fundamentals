function count() {
    let beginInput = document.getElementById('txtbegin')
    let endInput = document.getElementById('txtend')
    let stepInput = document.querySelector('#txtstep')
    let result = document.getElementById('result')

    if (beginInput.value.length == 0 || endInput.value.length == 0 || stepInput.value.length == 0) {
        window.alert("ERROR! There is no data")
    } else {
        result.innerHTML = 'Counting: <br>'

        let begin = Number(beginInput.value)
        let end = Number(endInput.value)
        let step = Number(stepInput.value)

        if (step <= 0) {
            window.alert("Step must be greater than 0! Using step = 1")
            step = 1
        }

        if (begin < end) {
            for (let c = begin; c <= end; c += step) {
                result.innerHTML += `${c} → `
            }
        } else {
            for (let c = begin; c >= end; c -= step) {
                result.innerHTML += `${c} → `
            }
        }

        result.innerHTML += '🏁'
    }
}
