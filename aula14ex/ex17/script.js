function Tabuada() {
    var numero = window.document.getElementById('inum')
    var resposta = window.document.getElementById('res')
    var num = Number(numero.value)
    var c = 1
    for (c = 1; c <= 10; c++) {
        var mult = num * c
        resposta.innerHTML += `${mult}`
    }
}