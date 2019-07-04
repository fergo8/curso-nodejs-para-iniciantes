let pokemons = [
    { id: 1, nome: "Bulbasaur", tipo: "planta" },
    { id: 2, nome: "Charmander", tipo: "fogo" },
    { id: 3, nome: "Squirtle", tipo: "água" }
]

console.time("for")
for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i].nome)
}
console.timeEnd("for")

console.time("for-in")
for(let i in pokemons) {
    console.log(pokemons[i].nome)
}
console.timeEnd("for-in")

console.time("for-of")
for (pokemon of pokemons) {
    console.log(pokemon.nome)
}
console.timeEnd("for-of")