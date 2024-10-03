function contar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var resposta = document.querySelector('#resposta')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i == 0 || f == 0|| p == 0 || p > i) {
        resposta.innerHTML = 'Impossível contar!'
    } else {
        resposta.innerHTML = 'Contando: '    
        for (; i < f; i += p) {     
            resposta.innerHTML += `${i} 👉`    
        }
        for (; i > f; i -=p) {
            resposta.innerHTML += `${i} 👉`
        }
        resposta.innerHTML += `🏁`
    }  
}