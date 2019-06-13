/*
 - Obter usuário;
 - Obter telefone a partir do id do usuário;
 - Obter endereço a partir do id do usuário.
*/

function getUsuario() {
    setTimeout(() => {
        return {
            id: 1,
            nome: "Andie",
            dataNascimento: new Date()
        }
    }, 3000);
}

function getTelefone(idUsuario) {
    setTimeout(() => {
        return {
            numero: "912345678",
            ddd: "99"
        }
    }, 2000);
}

function getEndereco(idUsuario) {
    setTimeout(() => {
        return {
            rua: "Av. Maria",
            numero: "100 OR",
            bairro: "Misericórdia"
        }
    }, 4000);
}

const usuario = getUsuario()
const telefone = getTelefone(usuario.id)
const endereco = getEndereco(usuario.id)

console.log("usuário:", usuario)
console.log("telefone:", telefone)
console.log("endereço:", endereco)