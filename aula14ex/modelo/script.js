function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro, verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 18) {
                img.setAttribute('src', 'foto.menino.jpg')
            } else if (idade > 18 && idade <= 50) {
                img.setAttribute('src', 'foto.felipeneo.jpg')
            } else {
                img.setAttribute('src', 'foto.gusta2.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 0 && idade <= 18) {
                img.setAttribute('src', 'foto.menina.jpg')
            } else if (idade > 18 && idade <= 50) {
                img.setAttribute('src', 'foto.mulher.jpg')
            } else {
                img.setAttribute('src', 'foto.senhora.jpg')
            }
        }
        res.innerHTML = `Decectamos gênero ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}