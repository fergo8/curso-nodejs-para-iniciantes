# Tipos de Loop For

O comando _**For**_ se refere a um laço de repetição (_loop_) que itera um determinado trecho de código. Ok, isso não é novidade. Contudo, temos também outras três variações desse comando que trazem ganho de performance às aplicações que desenvolvemos: _**For-In**_, _**For-Of**_ e _**ForEach**_.

## Tipo 1: comando For padrão

Como esse tipo de _**For**_ é o mais comum, não vou me estender nele. Sendo assim, temos o exemplo a seguir:

```javascript
let pokemons = [
    { id: 1, nome: "Bulbasaur", tipo: "planta" },
    { id: 2, nome: "Charmander", tipo: "fogo" },
    { id: 3, nome: "Squirtle", tipo: "água" }
]

for(let i=0; i<pokemons.length; i++) {
    console.log(pokemons[i].nome)
}
```

No exemplo acima temos um array de objetos representando os três pokemons iniciais clássicos. Note que cada um possui como atributos um _id_, o _nome_ e o _tipo_. Logo em seguida, temos o exemplo de _For_ mais comum, ou seja, utilizando uma variável _i_ que serve como contador ao realizar iterações com _i++_. Sendo assim, a cada nova iteração, o código mostra no console o nome do próximo pokemon, criando com isso uma lista dos três nomes de pokemon constando no array.

## Tipo 2: comando For-In

Contudo, o tipo de laço _For_ padrão muitas vezes não é a melhor opção para implementar iterações. Além dele existe também o laço _**For-In**_, que traz como benefício um desempenho em média dez vezes mais veloz. Observe:

```javascript
for(let i in pokemons) {
    console.log(pokemons[i].nome)
}
```

Além de ser mais rápida, convenhamos que essa maneira também é muito mais legível, aproximando-se da linguagem humana.

## Tipo 3: comando For-Of

Uma outra maneira de manter o alto desempenho do código e torná-lo ainda mais fácil de compreender é através do terceiro tipo de laço: o _**For-Of**_. Note que no exemplo anterior, sobre _For-In_, nós ainda temos uma variável _i_ que não possui um significado semântico para nós, servindo apenas como iterador. Observe a diferença ao usarmos o _For-Of_:

```javascript
for(pokemon of pokemons) {
    console.log(pokemon.nome)
}
```

Agora, em vez de usarmos um iterador, passamos a utilizar a variável _**pokemon**_ (no singular), que representa cada elemento dentro do array _**pokemons**_ (no plural). Dessa forma, o código se aproxima ainda mais da linguagem humana, facilitando seu entendimento.

## Tipo 4: comando ForEach

Por fim, temos a quarta maneira de iterar sobre arrays, através do _**ForEach**_. A diferença aqui está na maneira com que ele é implementado, já que trata-se de um método próprio de arrays. Observe:

```javascript
pokemons.forEach(pokemon => {
    console.log(pokemon.nome)
})
```

Note que nessa implementação o método parte do array. Além disso, assim como no caso anterior do _For-Of_, também utilizamos de uma variável (ou parâmetro, melhor dizendo) chamada _**pokemon**_ (no singular) para indicar cada item dentro do array. É imporante ressaltar que essa implementação também tem um desempenho cerca de dez vezes melhor que o _For_ padrão.

Caso você queira testar todos esses tipos de _**For**_ e ainda comparar seus respectivos tempos de execução, separei esses mesmos códigos na íntegra [neste link aqui](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%202/source-code/exemplo1.0.js).

[Próxima Página :point_right:](https://github.com/fergo8/curso-nodejs-para-iniciantes/blob/master/Modulo%202/01-tipos-de-loop-for.md)
