let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let resfin = document.querySelector('#resfin')
let numeros = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, numeros)) {
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        res.appendChild(item)
    } else {
        alert('Digite um número válido ou número já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        resfin.innerHTML += `<br>Ao todo, temos ${numeros.length} números cadastrados`
        const max = numeros.reduce((max, num) => Math.max(max, num))
        resfin.innerHTML += `<br> O maior valor informado foi ${max}.`

        const menor = numeros.reduce((min, num) => Math.min(min, num))
        resfin.innerHTML += `<br>O menor valor informado foi ${menor}.`

        const soma = numeros.reduce((total, num) => total + num, 1)
        resfin.innerHTML += `<br>Somando todos os valores, temos ${soma}.`
        
        const s = numeros.reduce((total, num) => total + num, 0)
        const media = s / numeros.length
        resfin.innerHTML += `<br>A média dos valores digitados é  ${media}.`
    }
} 