# O que é EventEmitter

O EventEmitter é um componente do módulo _**events**_ cuja função é manipular eventos tanto no front quanto no back-end. A forma padrão de usá-lo consiste em três passos:

* Criar uma função;
* Atribuir a função a um evento;
* Executar o evento.

Obviamente, tratando-se de um módulo, primeiro temos de importá-lo. Em seguida passamos às três etapas apresentadas. Sendo assim, observe a implementação a seguir:

```javascript
// Importar e instanciar EventEmitter
const EventEmitter = require("events").EventEmitter
const emitter = new EventEmitter()

// Criar uma função
const cumprimento = pessoa => {
    console.log(`Olá, ${pessoa}! Tenha um ótimo dia!`)
}

// Atribuir a função a um evento
emitter.on("cumprimentar", cumprimento)

// Executar o evento
emitter.emit("cumprimentar", "Andie")
```

Com isso, teremos printada no console como resultado a frase _"Olá, Andie! Tenha um ótimo dia!"_. Sendo assim, o primeiro parâmetro do método _**emit()**_ refere-se ao nome do evento a ser executado, enquanto que o segundo parâmetro trata do nome da pessoa em que o cumprimento se destina. Você pode encontrar [o código desse exemplo aqui](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%201/source-code/exemplo4.0.js).

## Utilizando EventEmitter com Promises

Quando for necessário usar eventos encadeados que precisem se repetir apenas uma vez, utilizamos as _Promises_. Sendo assim, criamos aquela função auxiliar _main()_ que vai retornar a _Promise_, encapsulando nesta toda a execução do evento. Em seguida, executamos _main()_. Observe:

```javascript
function main() {
    return new Promise((resolve, reject) => {
        const result = emitter.emit("cumprimentar", "Andie")
        return resolve(result)
    })
}

// Execução da Promise
main()
    .then(func => {
        console.log("Promise resolvida")
    })
```

A frase _"Promise resolvida"_ está ali apenas para indicar que é possível encadear novas execuções ao usarmos _**.then**_. Em todo caso, há momentos em que precisamos que um evento fique se repetindo, então essa implementação da _Promise_ não será suficiente.

## EventEmitter em loop infinito

Para gerar um loop na execução do evento, basta utilizar a função _**setInterval()**_ no lugar da função _main()_ do exemplo anterior. Observe a implementação da execução:

```javascript
setInterval(() => {
    emitter.emit("cumprimentar", "Andie")
}, 1000)
```

Encapsulando a execução do evento na função _setInterval()_ fará com que esse evento se repita em loop infinito.

[Próxima Página :point_right:](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%202/01-tipos-de-loop-for.md)
