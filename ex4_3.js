const fruta = ['abacaxi', 'graviola','goiaba', 'maracujá']

const carro = {
    marca: 'FIAT',
    cor: 'Prata',
    ano: 2022
}

function suco(){
    console.log('\nOs sucos de frutas são:')
    for (const e of fruta){
        console.log(e)
    }
}

function automovel(){
    console.log('\nAs características do carro são:')
    for (const index in carro){
        console.log(`${index} : ${carro[index]}`)
    }
}

suco()

automovel()
