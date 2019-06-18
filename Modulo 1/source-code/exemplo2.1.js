/*

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