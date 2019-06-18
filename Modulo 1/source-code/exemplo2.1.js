/*
  Criar duas funções chamadas passarCanais() e ligarTV(), ambas retornando
  instâncias do objeto Promise(). Em seguida, invocamos a função ligarTV().
  Logo depois, ao fim da execução, a função passarCanais() passa a ser executada.
  Por fim, a mensagem do console.log() será mostrada em tela.
*/

// Implementação com Promise
function passarCanais(tv) {
    return new Promise((resolv, reject) => {
        const frase = tv + " e passei os canais."
        return resolv(frase)
    })
}

function ligarTV() {
    return new Promise((resolv, reject) => {
        const tv = "Liguei a TV"
        return resolv(tv)
    })
}

// Invocando ligarTV() e passarCanais() como Promise
ligarTV()
    .then((result) => {
        return passarCanais(result)
    })
    .then((result) => {
        console.log(result)
    })
    .catch((erro) => {
        console.error(erro)
    })