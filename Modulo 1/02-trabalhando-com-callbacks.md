# Trabalhando com Callbacks

Uma característica do ecossistema NodeJS é a **assincronia**. Para evitar situações de bloqueio da aplicação (aquele momento em que a tela trava e o browser fica "pensando"), através do Event Loop o NodeJS consegue dar sequência ao andamento da aplicação sem esperar pelo retorno/resultado do processo em execução, gerando assim chamadas assíncronas.

O problema disso é que muitas vezes precisamos de um comportamento que espere esse retorno para continuar executando o código seguinte. Por exemplo, precisamos esperar uma consulta ao banco de dados terminar para depois renderizar a página. Devido a assincronia do NodeJS, a renderização da página não aguardará até que os dados trazidos do banco sejam carregados, gerando assim uma tela em branco.

Observe [neste link](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/source-code/exemplo1.0.js) um exemplo de código cujo problema está na assincronia gerada pelas funções _setTimeout()_

## O que é um Callback

Uma forma de sincronizar essas funções é utilizando _**Callbacks**_. Os Callbacks são funções chamadas como parâmetro de outras funções.

Por exemplo, vamos criar uma função chamada _passarCanais()_. A seguir, escrevemos uma outra função chamada _ligarTV()_, que tem como parâmetro uma função de Callback. Sendo assim, ao invocarmos a função _ligarTV()_, ela será executada e em seguida, ao fim de sua execução, seu Callback passa a ser executado. Observe a implementação dessas funções:

```javascript
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
```

Por padrão, toda função de Callback precisa ter como primeiro parâmetro o erro, como vimos na assinatura da função _passarCanais()_. Isso garante que o código não quebre ao haver erros na implementação. Por isso, usei um **if(erro) return** para indicar que o script pare, caso haja algum erro.

## Resolvendo assincronia

Agora, voltando ao assunto da assincronia, veja como ficaria o exemplo do início desse texto se nós usarmos Callbacks para tornar [aquele código](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/source-code/exemplo1.1.js) síncrono.

[Próxima Página :point_right:](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/03-entendendo-promises.md)
