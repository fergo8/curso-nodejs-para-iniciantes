/*
 - Obter usuário;
 - Obter telefone a partir do id do usuário;
 - Obter endereço a partir do id do usuário.
*/

function getUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: "Andie",
                dataNascimento: new Date()
            })
        }, 3000);
    })
}

function getTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                numero: "912345678",
                ddd: "99"
            })
        }, 2000);
    })
}

function getEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: "Av. Maria",
                numero: "100 OR",
                bairro: "Misericórdia"
            })
        }, 4000);
    })
}

getUsuario()
    .then((usuario) => {
        return getTelefone(usuario.id).then((telefone) => {
            return {
                usuario: usuario,
                telefone: telefone
            }
        })
    })
    .then((result) => {
        return getEndereco(result.usuario.id).then((endereco) => {
            return {
                usuario: result.usuario,
                telefone: result.telefone,
                endereco: endereco
            }
        })
    })
    .then((result) => {
        console.log(`
            Nome: ${result.usuario.nome}
            Telefone: (${result.telefone.ddd}) ${result.telefone.numero}
            Endereço: ${result.endereco.rua}, ${result.endereco.numero} - ${result.endereco.bairro}
        `)
    })
    .catch((erro) => {
        console.error(erro)
    })

/*
// Execução das funções aninhadas por Callbacks
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
*/