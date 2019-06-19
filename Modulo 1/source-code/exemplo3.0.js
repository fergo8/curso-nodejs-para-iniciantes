// Criando as funções que retornam Promises
function conectarComBanco() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const consulta = {
                id: 1,
                msg: "Olá, Mundo!"
            }
            return resolve(consulta)            
        }, 3000);
    })
}

function printarNaTela(consulta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const print = `Mensagem: ${consulta}`
            return resolve(print)            
        }, 5000);
    })
}

// Criando função principal para encadear as duas Promises
async function main() {
    try {
        console.time("promise")
        const conexao = await conectarComBanco()
        const result = await Promise.all([
            printarNaTela(conexao.id),
            printarNaTela(conexao.msg)
        ])
        const resultID = result[0]
        const resultMSG = result[1]

        console.log(`
            ====== Resultado ======
            ID ${resultID}
            ${resultMSG}
        `)
        console.timeEnd("promise")
    } catch (erro) {
        console.error("Deu problema", erro)
    }    
}

// Executando a função principal
main()