# Trabalhando com Callbacks

Uma característica do ecossistema NodeJS é a **assincronia**. Para evitar situações de bloqueio da aplicação (aquele momento em que a tela trava e o browser fica "pensando"), através do Event Loop o NodeJS consegue dar sequência ao andamento da aplicação sem esperar pelo retorno/resultado do processo em execução, gerando assim chamadas assíncronas.

O problema disso é que muitas vezes precisamos de um comportamento que espere esse retorno para continuar executando o código seguinte. Por exemplo, precisamos esperar uma consulta ao banco de dados terminar para depois renderizar a página. Devido a assincronia do NodeJS, a renderização da página não aguardará até que os dados trazidos do banco sejam carregados, gerando assim uma tela em branco.

Observe [neste link](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/source-code/exemplo1.0.js) um exemplo de código cujo problema está na assincronia gerada pelas funções _setTimeout()_

## O que é um Callback

Uma forma de sincronizar essas funções é utilizando *_Callbacks_*. Os Callbacks são funções chamadas como parâmetro de outras funções.
