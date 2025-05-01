function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('photo').querySelector('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Now it's ${hora}hrs`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha-web.jpg'
        document.body.style.backgroundColor = 'rgba(225, 166, 39, 0.415)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde-web.jpg'
        document.body.style.backgroundColor = 'rgba(192, 83, 15, 0.572)'
    } else {
        img.src = 'imagens/noite-web.jpg'
        document.body.style.backgroundColor = 'grey'
    }
}

