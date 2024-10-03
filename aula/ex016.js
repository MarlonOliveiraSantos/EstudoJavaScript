let amigo = {
    nome: 'Marlon',
    peso: 90,
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar(2)
console.log(amigo)