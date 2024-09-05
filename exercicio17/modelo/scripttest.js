var lista = [1, 4, 7, 88, 6];

var ltamanho = lista.length
var res = lista.push(4)

for (var c = 0; c <= ltamanho; c++) {
    if (res === lista[c]) {
        console.log('Esse valor já está na lista.')
    }
}