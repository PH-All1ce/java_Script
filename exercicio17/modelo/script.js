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
    var ltamanho = lista.length;
    var soma = 0;
    var media = 0;
    var res = document.getElementById('res')
    res.innerHTML += `${lista} <br>`
    res. innerHTML += `A lista possui ${ltamanho} elementos. <br>`
    for (var c = 0; c <= ltamanho - 1; c++) {
        soma += lista[c];
        media = soma / ltamanho
    }
    res.innerHTML += `A soma de todos os números é igual a ${soma}. <br>`;
    res.innerHTML += `A média dos elementos presente no array é igual a ${media}.`
}