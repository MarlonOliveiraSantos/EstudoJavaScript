function gerar() {
    var numero = document.querySelector('#txtn')
    var tab = document.querySelector('#tabuada')
    var n = Number(numero.value)

    if(n == 0) {
        alert('Por favor, digite um número')
    } else {
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    
}