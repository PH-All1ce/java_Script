var lista = []
function Adicionar() {
    var num  = document.getElementById('num');
    var number = Number(num.value);
    var tab = document.getElementById('seletor');
    if (number <= 0 || number == '' || number > 100) {
        alert('Informe um valor válido.')
    } else {
        lista.push(number);
        num.value = ''
        let item = document.createElement('option')
        item.text = `O número ${number} foi adicionado.`
        tab.appendChild(item)
    }
}

function Finalizar() {
    lista.sort()
    var ltamanho = lista.length;
    var tamanho = Number(ltamanho.value);
    var res = document.getElementById('res')
    res.innerHTML += `${lista} <br>`
    res. innerHTML += `A lista possui ${ltamanho} elementos. <br>`
    res.innerHTML += `O maior item da lista é o número ${lista[tamanho]}`
}