function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()
    var hora = 12

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora <= 12) {
        img.src = 'manha.jfif'
        document.body.style.background = 'green'
    } else if (hora > 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'red'    
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'purple'
    }

}