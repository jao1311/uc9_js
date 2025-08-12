let prompt = require("prompt-sync")()

let usuarios = [
    { nome: "conrado", senha: "123", admin: true, id: 1},
    { nome: "marcos", senha: "321", admin: false, id: 2},
    { nome: "eduardo", senha: "222", admin: false, id: 3},
]

let usuario = null

main()
function main(){

    console.log("--- SISTEMA DE LOGIN ---")
    let nome = prompt("Digite o nome: ")
    let senha = prompt("Digite a senha: ")

    autenticar( nome, senha )

    if( usuario.admin == true ){
        buscaTodos()
    }else{
        //buscaID(usuario.admin.id)
        console.log(usuario)
    }

}

function autenticar( Zarabatana, PasseDeBatalha ){

    for(let i = 0; i < usuarios.length; i++){
        if( usuarios[i].nome == Zarabatana && usuarios[i].senha == PasseDeBatalha ){
            usuario = usuarios[i]
            console.log(`Usuário [${usuario.nome}] autenticado com sucesso`)
        }
    }

    if( usuario == null ){
        console.log("Usuário ou senha incorretos...")
    }

}

function buscaTodos(){

    for( i = 0; i < usuario.length; i++ ){
        console.log(`${i+1} - Nome: [${usuario[i].nome}] | Idade: [${usuario[i].idade}] | ID: [${usuario[i].id}]`)
    }
}

function buscaNome( homosapiens ){

    for( i = 0; i <  usuario.length; i++){
        if( homosapiens == usuario[i].nome ){
            console.log(`Nome: [${usuario[i].nome}] | Idade: [${usuario[i].idade}] | ID: [${usuario[i].id}]`)
        }
    } 
}