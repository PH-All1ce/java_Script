var lista = []
function Adicionar() {
    var num  = document.getElementById('num');
    var number = Number(num.value);
    lista[0] = number;
}
Adicionar();

function Finalizar() {
    var ltamanho = lista.length
    var res = document.getElementById('res')
    res.innerHTML = lista
    res. innerHTML += `A lista possui ${ltamanho} elementos`
}