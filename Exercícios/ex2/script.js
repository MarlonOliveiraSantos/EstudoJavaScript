function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''   
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                img.setAttribute('src', 'criancahomem.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultohomem.jpg') 
            } else {
                img.setAttribute('src', 'idosohomem.webp') 
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src', 'criancamulher.jpg') 
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmulher.jfif')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultomulher.webp') 
            } else {
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
      


        

    
        
 

}    
 