/*
  Criar uma função chamada _passarCanais()_. A seguir, escrevemos uma outra
  função chamada _ligarTV()_, que tem como parâmetro uma função de Callback.
  Sendo assim, ao invocarmos a função _ligarTV()_, ela será executada e em
  seguida, ao fim de sua execução, seu Callback passa a ser executado.
*/

// Criando as funções
function ligarTV(callback) {
    const tv = "Liguei a TV"
    return callback(null, tv)
}

function passarCanais(err, tv) {
    if (err) return
    console.log(`${tv} e passei os canais.`)
}

// Invocando a função
ligarTV(passarCanais)