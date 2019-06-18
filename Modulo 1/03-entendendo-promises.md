# Entendendo Promises

Os Callbacks funcionam bem para sincronizar scripts, contudo eles têm uma desvantagem relacionada à estrutura. Quando precisamos criar sincronia entre muitas funções de uma vez, isso torna o código muito grande, com as funções aninhadas, o que dificulta o entendimento e a manutenção do código.

Para evitar esse tipo de problema, existe outro recurso usado para substituir os Callbacks, tornando o código mais legível: as _**Promises**_.

## O que são Promises

São instâncias de um objeto JavaScript usado para facilitar a sincronização de funções. As Promises conseguem encadear funções de modo que o resultado da primeira função seja usado como argumento para a segunda, e assim por diante. Além disso, Promises também podem tratar erros de maneira simples.

Para realizar esse gerenciamento, Promises possuem três estados:

* **Pending**: estado inicial, Promise ainda não resolvida nem rejeitada;
* **Fulfilled**: Promise resolvida com sucesso;
* **Rejected**: Promise rejeitada/falhou.
