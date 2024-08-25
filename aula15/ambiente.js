let num = [5, 8, 4]
num.push(7)
num.sort()

/*
console.log(num)
console.log(`Seu vetor possui ${num.length} elementos.`)
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
*/

/*
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
console.log(num.indexOf(7))
*/

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor está na posição ${pos}`)
}