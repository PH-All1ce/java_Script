function Contar() {
    var inicio = window.document.getElementById('idinicio')
    var fim = window.document.getElementById('idfim')
    var passo = window.document.getElementById('idpasso')
    var resposta = window.document.getElementById('res')

    if (inicio.value == 0 || passo.value == 0 || fim.value == 0) {
        alert('Informe um valor válido.')
    } else if (fim.value > 100) {
        alert('Informe um valor menor.')
    } else {
        resposta.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var c = i; c <= f; c += p)
        resposta.innerHTML += `${c}`
    }
}