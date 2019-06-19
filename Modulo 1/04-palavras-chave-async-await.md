# Palavras-chave Async/Await

Uma outra maneira de criar Promises é usando as palavras-chave _**Async**_ e _**Await**_. Ao adicionar _Async_ ao criar uma função, nós geramos uma Promise como retorno e esta pode ser usada no encadeamento através da palavra-chave _Await_. Dessa forma conseguiremos sincronizar o código de forma muito mais legível. Observe a estrutura padrão do encadeamento:

```javascript
async function main() {
    try {
        const funcao1 = await primeiraFuncao()
        const funcao2 = await segundaFuncao(funcao1)
        const funcao3 = await terceiraFuncao(funcao2)
    } catch(erro) {
        console.error(erro)
    }
}
```

Note que, em vez de usarmos _.then_, agora criamos uma função _Async_ auxiliar chamada _**main()**_ e dentro dela fazemos o encadeamento. A palavra-chave _Await_ funciona como uma pausa na execução de cada função até que a anterior complete o processamento.

Note também que o código está encapsulado em blocos _**try-catch**_, o que facilita a manipulação de erros. Além disso, é importante ressaltar que **as funções a serem invocadas dentro do bloco _try_ devem sempre retornar Promises, senão não adianta**.

## Outro exemplo para estudo

Para ficar mais claro, temos esse outro exemplo bastante semelhante ao código da página anterior sobre Promises, mas dessa vez convertido para a forma com _Async_ e _Await_.

[Exemplo de Async/Await](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/source-code/exemplo3.0.js)

No exemplo acima você verá ainda a utilização do método _**Promise.all()**_, que pode ser usado para otimizar o tempo de execução das funções. Ele é utilizado apenas em caso de funções que não dependem uma da outra, assim como ocorre com as duas execuções de _printarNaTela()_, no exemplo acima.

[Próxima Página :point_right:](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/05-o-que-e-eventemitter.md)
