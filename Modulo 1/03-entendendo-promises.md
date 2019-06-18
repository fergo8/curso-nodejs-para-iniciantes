# Entendendo Promises

Os Callbacks funcionam bem para sincronizar scripts, contudo eles têm uma desvantagem relacionada à estrutura. Quando precisamos criar sincronia entre muitas funções de uma vez, isso torna o código muito grande, com as funções aninhadas, o que dificulta o entendimento e a manutenção do código.

Para evitar esse tipo de problema, existe outro recurso usado para substituir os Callbacks, tornando o código mais legível: as _**Promises**_.

## O que são Promises

São instâncias de um objeto JavaScript usado para facilitar a sincronização de funções. As Promises conseguem encadear funções de modo que o resultado da primeira função seja usado como argumento para a segunda, e assim por diante. Além disso, Promises também podem tratar erros de maneira simples.

Para realizar esse gerenciamento, Promises possuem três estados:

* **Pending**: estado inicial, Promise ainda não resolvida nem rejeitada;
* **Fulfilled**: Promise resolvida com sucesso;
* **Rejected**: Promise rejeitada/falhou.

Tendo em mente estes três estados, entendemos melhor as mensagens descritas no console ao testarmos nossas aplicações.

## Comparando Promise com Callback

Veja a seguir o exemplo da página anterior sobre Callbacks e como ele ficaria ao ser "transformado" em Promises.

```javascript
/*
// Implementação com Callback
function passarCanais(erro, tv) {
    if(erro) return
    console.log(`${tv} e passei os canais.`)
}

function ligarTV(callback) {
    const tv = "Liguei a TV"
    return callback(null, tv)
}

// Invocando ligarTV() com passarCanais() como callback
ligarTV(passarCanais)
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
```

Observe que, através do objeto _Promise()_, nós encapsulamos todo o conteúdo de cada função. Este objeto recebe como parâmetro uma função que, por sua vez, possui um **resolv** (caso de sucesso) e um **reject** (caso de falha). Sendo assim, em vez de retornarmos um _callback()_ como antes, agora estamos retornando o _resolv()_ tanto no caso da função _ligarTV_ quanto na _passarCanais_.

Além disso, note que a maneira de invocar as funções está bem diferente. Agora usamos o _**.then()**_ para encadear cada função. Fica fácil entender o que está acontecendo, se tivermos em mente que a palavra "then" em inglês significa algo como "em seguida". Ou seja, o código segue a sequência:

Primeiro _ligarTV()_, **em seguida** _passarCanais()_, **em seguida** _console.log(result)_.

No fim da cadeia, temos um _**.catch()**_ que será executado apenas em caso de ocorrer algum erro. Esse _catch_ printará no console o erro ocorrido.
