var idade = 88
if (idade < 16) {
    console.log('Não vota!')
} else if (idade > 16 && idade < 18) {
        console.log('Voto opcional')
    } else if (idade > 65) {
        console.log('Voto opcional.')
    } else {
        console.log('Voto obrigatório.')
    }