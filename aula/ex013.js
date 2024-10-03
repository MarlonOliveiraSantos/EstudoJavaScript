let n = [0,1,2,3,4]

console.log(`O array é ${n}`)
console.log(`O array tem um tamanho de ${n.length} elementos`)
console.log(`O terceiro elemento é ${n[2]}`)

for (i = 0; i < n.length; i++) {
    console.log(`O elemento atual é: ${n[i]}`)
}
for (i in n) {
    console.log(n[i])
}