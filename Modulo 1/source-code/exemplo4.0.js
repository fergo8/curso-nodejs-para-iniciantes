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

// === Executar evento com Promise ===
function main() {
    return new Promise((resolve, reject) => {
        const result = emitter.emit("cumprimentar", "Andie")
        return resolve(result)
    })
}

main().then(result => {
    console.log("Promise resolvida")
})

// === Executar evento em loop infinito ===
setInterval(() => {
    emitter.emit("cumprimentar", "Andie")
}, 1000)