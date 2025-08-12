let prompt = require('prompt-sync')()

// Lista de todos usuários
let usuarios = [
    { id: 1, nome: "admin", senha: "admin" },
    { id: 2, nome: "Mônica", senha: "123" },
    { id: 3, nome: "Cebolinha", senha: "321" },
    { id: 4, nome: "Cascão", senha: "222" },
    { id: 5, nome: "Magali", senha: "333" },
    { id: 6, nome: "Marina", senha: "456" },
    { id: 7, nome: "Franjinha", senha: "789" },
    { id: 8, nome: "Chico Bento", senha: "999" },
]

// Guarda o usuário logado 
let usuario = null

main()
function main(){

    console.clear()

    // Ao iniciar o sistema, se não tem um usuário, já vai direto pra autenticação...
    if(usuario == null){
        autenticar()
        return
    }

    console.log("---- CONRADITO SYSTEM ----")
    console.log("Opções disponíveis:")
    console.log("[1] - 🙋 Usuários")
    console.log("[2] - 📦 Produtos")
    console.log("[3] - 🎚️ Estoque")
    console.log("[4] - ⛔ Sair")
    let opcao = prompt("Digite uma opção 👉 ")

    if( opcao == "1" ){
        sistemaUsuarios()
    }else if(opcao == "2"){
        sistemaProdutos()
    }else if(opcao == "3"){
        sistemaEstoque()
    }else{
        deslogar()
    }

}

function autenticar(){

    console.log("---- 🔐 LOGIN DE USUÁRIOS ----")
    let nome = prompt("🪪 Digite o nome: ")
    let senha = prompt("🔑 Digite a senha: ")

    // Lógica para validar autenticação...

    main()

}

function deslogar(){

    console.log("---- ⛔ VOCÊ FOI DESLOGADO! ----")

    usuario = null // Limpa o usuário

    setTimeout(() => {
        main()
    }, 1500);

}