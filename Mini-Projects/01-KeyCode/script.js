
function showKeyCodes(event) {
    const insert = document.getElementById('insert')
    insert.innerHTML = '' 

    const keyCodes = {
        'event.key': event.key === ' ' ? 'Space' : event.key,
        'event.KeyCode': event.keyCode,
        'event.code': event.code,
        
    }

    for (let key in keyCodes) {
        const div = document.createElement('div')
        div.className = 'key'
        const small = document.createElement('small')

        const keyText = document.createTextNode(key)
        const valueText = document.createTextNode(keyCodes[key])

        small.appendChild(keyText)
        div.appendChild(valueText)
        div.appendChild(small)

        insert.appendChild(div)
    }
}


window.addEventListener('keydown', showKeyCodes)