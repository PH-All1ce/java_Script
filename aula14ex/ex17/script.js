function Tabuada() {
    var numero = window.document.getElementById('inum')
    var resposta = window.document.getElementById('res')
    var num = Number(numero.value)
    var c = 1
    if (num == ''){
        alert('por favor digite um número para que possa ser realizada a sua tabuada!')
    } else {
        for (c = 1; c <= 10; c++) {
            var mult = num * c
            resposta.innerHTML += `${c} x ${num} = ${mult} <br>`
        }
    }
}

function Zerar() {
    var resposta =  window.document.getElementById('res')
    resposta.innerHTML = 'Valor zerado. <br>'
}