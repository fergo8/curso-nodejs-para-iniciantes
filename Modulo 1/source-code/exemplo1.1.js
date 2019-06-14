/*
 - Obter usuário;
 - Obter telefone a partir do id do usuário;
 - Obter endereço a partir do id do usuário.
*/

function getUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: "Andie",
            dataNascimento: new Date()
        })
    }, 3000);
}

function getTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            numero: "912345678",
            ddd: "99"
        })
    }, 2000);
}

function getEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "Av. Maria",
            numero: "100 OR",
            bairro: "Misericórdia"
        })
    }, 4000);
}

// Execução das funções aninhadas
getUsuario((errUsuario, usuario) => {
    if(errUsuario){
        console.console.error("Deu ruim no usuário:", errUsuario)
        return
    }
    getTelefone(usuario.id, (errTelefone, telefone) => {
        if (errTelefone) {
            console.console.error("Deu ruim no telefone:", errTelefone)
            return
        }
        getEndereco(usuario.id, (errEndereco, endereco) => {
            if (errEndereco) {
                console.console.error("Deu ruim endereço:", errEndereco)
                return
            }
            console.log(`
                Nome: ${usuario.nome}
                Telefone: (${telefone.ddd}) ${telefone.numero}
                Endereço: ${endereco.rua}, ${endereco.numero} - ${endereco.bairro}
            `)
        })
    })
})
