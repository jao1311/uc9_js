let prompt = require('prompt-sync')()

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

let usuario = null

main()
function main(){

    console.clear()

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
    }

}

function autenticar(){

    console.log("---- 🔐 LOGIN DE USUÁRIOS ----")
    let nome = prompt("🪪 Digite o nome: ")
    let senha = prompt("🔑 Digite a senha: ")

    for(let i = 0; i < usuarios.length; i++){
        if( usuarios[i].nome == nome && usuarios[i].senha == senha ){
            usuario = usuarios[i]
        }
    }

    if(usuario == null){
        console.log("Usuário ou senha incorretos...")
    }

    main()

}

function sistemaUsuarios(){

    console.clear()

    console.log("Menu > Usuários")
    console.log("---- 🙋 USUÁRIOS ----")
    console.log("Opções disponíveis:")
    console.log("[1] - 📝 Cadastro")
    console.log("[2] - 🔎 Busca")
    console.log("[3] - ⬅️ Voltar")
    let opcao = prompt("Digite uma opção 👉 ")

    if( opcao == "1" ){
        cadastroUsuarios()
    }else if(opcao == "2"){
        sistemaBuscaUsuarios()
    }else{
        main()
    }

}

function cadastroUsuarios(){

    console.clear()

    console.log("Menu > Usuários > Cadastro")
    console.log("---- 📝 CADASTRO DE USUÁRIOS ----")
    let nome = prompt("🪪 Digite o nome: ")
    if(nome.length < 3){
        console.clear()
        console.log("O nome deve ter pelo menos 3 caracteres. Tente novamente...")
        setTimeout(() => {
            cadastroUsuarios()
        }, 1500);
        return
    }

    let senha = prompt("🔑 Digite a senha: ")
    if(senha.length < 6){
        console.clear()
        console.log("A senha deve ter pelo menos 6 caracteres. Tente novamente...")
        setTimeout(() => {
            cadastroUsuarios()
        }, 1500);
        return
    }

    let novo_usuario = {
        id: usuario.length++,
        nome: nome,
        senha: senha
    }

    usuarios.push(novo_usuario)

    console.clear()
    console.log("Cadastro de ["+novo_usuario.nome+"] realizado com sucesso!")
    setTimeout(() => {
        sistemaUsuarios()
    }, 1500);

}

function sistemaBuscaUsuarios(){

    console.clear()

    console.log("Menu > Usuários > Busca")
    console.log("---- 🔎 BUSCA DE USUÁRIOS ----")
    console.log("Opções disponíveis:")
    console.log("[1] - 👨‍👩‍👧‍👦 Listar todos usuários")
    console.log("[2] - 🪪 Buscar usuário pelo nome")
    let opcao = prompt("Digite uma opção 👉 ")

    if( opcao == "1" ){
        listaUsuarios()
    }else if(opcao == "2"){
        buscaUsuarios()
    }else{
        main()
    }
}

function listaUsuarios(){

    console.clear()

    for (let i = 0; i < usuarios.length; i++) {
        console.log(`[${usuarios[i].id}] - ${usuarios[i].nome}`)
    }

    prompt("\nAperte ENTER para voltar...")
    sistemaUsuarios()

}

function buscaUsuarios(){

    console.clear()

    let nome = prompt("🔎 Digite o nome que deseja buscar: ")
    nome = nome.toLowerCase()

    for (let i = 0; i < usuarios.length; i++) {

        let aux = usuarios[i].nome
        aux = aux.toLowerCase()
        aux = aux.replaceAll("ô", "o")
        aux = aux.replaceAll("ã", "a")

        if( aux == nome ){
            console.log(`[${usuarios[i].id}] - ${usuario.nome}`)
        }
    }

    prompt("\nAperte ENTER para voltar...")
    sistemaUsuarios()

}