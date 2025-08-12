let prompt = require("prompt-sync")()

/*uma especie de tinder para encontrar um pet e adotar ele caso goste e dar match, obs: se isso ainda estiver aq 
 quer dizer que o código não está completo por falta de tempo e uma dor de cabeça infernal que atrapalhou dms, provavelmente 
 está faltando a parte do match de animal pra adoção, obs2: os usuarios estão imcompletos
*/
let usuarios = [
    { nome: "admin", senha: "admin", id: 0, admin: true, idade: "18", descricao: [ "Ademiro aham 😎" ]},
    { nome: "Ladrao", senha: "roubar", id: 1, admin: false, idade: "24", descricao: [ "Procura-se cão farejador de dinheiro 🐕‍🦺💵🤑" ]},
    { nome: "SonegadorDeImposto69", senha: "sonegar", id: 2, admin: false, idade: "16", descricao: [ "EU ODEIO PAGAR IMPOSTOS 💸💰" ]},
    { nome: "Pintosvaldo", senha: "pintar", id: 3, admin: false, idade: "56", descricao: [ "Pintosvaldo 😨" ]},
    { nome: "Roberto", senha: "gelo", id: 4, admin: false, idade: "86", descricao: [ "Está descongelando para o natal 🧊🎅🎄" ]},
    { nome: "Carlinhos", senha: "amocavalos", id: 5, admin: false, idade: "42", descricao: [ "Ele ama cavalos 🐴🥛" ]},
]

let pets = [
    { nome: "Sun", idade: "4", id: 0, adotado: true, especie: "Gato", tipo: "Marelo", genero: true, descricao: [ "Pet do Ademiro aham 🐈😎" ]},
    { nome: "Max", idade: "10", id: 1, adotado: false, especie: "Cachorro", tipo: "Bloodhound", genero: true, descricao: [ "Ex Cão Farejador do BOPE, ótimo farejador de drogas e dinheiro sujo" ]},
    { nome: "Frederico", idade: " 14", id: 2, adotado: false, especie: "Cachorro", tipo: "Golden Retriver", genero: true, descricao: [ "Cachorro grande para suprir a necessidade de pagar imposto" ]},
    { nome: "Linguiça", idade: "7", id: 3, adotado: false, especie: "Cachorro", tipo: "Salsicha", genero: true, descricao: [ "Sem fazendo prancha e gosta de longas brincadeiras" ]},
    { nome: "Pingu", idade: "2", id: 4, adotado: false, especie: "Pinguim", tipo: "pinguim-imperador", genero: true, descricao: [ "Bom amigo para quem sempre aparece no inverno 🧊" ]},
    { nome: "Dalva", idade: "17", id: 5, adotado: false, especie: "Cavalo", tipo: "Branco", genero: false, descricao: [ "Ama brincar com os outros e adora correr" ]},
]
let usuario = null

main()
function main(){
    console.clear()
    console.log("---- PET TINDER ----")
    console.log("Opções disponíveis:")
    console.log("[1] - 👤 Cadastro")
    console.log("[2] - 🐱 Cadastro de Pet")
    console.log("[3] - 🙋‍♂️ Login")
    console.log("[4] - ⛔ Sair")
    let opcao = parseInt(prompt("Digite uma opção 👉 "))

    if( opcao == 1 ){
        cadastro()
    }else if( opcao == 2 ){
        cadastroPet()
    }else if( opcao == 3){
        logar()
    }
}

function cadastro(){
    console.clear()
    let cadastroNome = prompt("Insira seu nome de usuário: ")
    let cadastroIdade = parseInt(prompt("Insira sua idade: "))
    let cadastroSenha = prompt("Defina sua senha: ")
    let cadastroConfirmaSenha = prompt("Confirme sua senha: ")
    let cadastroDesc = prompt("Insira uma descrição ou deixe em branco: ")
    let ids = usuarios.length + 1
    if( cadastroNome.length < 3 ){
        validacaoNome()  
    }else if( cadastroIdade < 18 || cadastroIdade > 99 ){
        validacaoIdade()
    }else if( cadastroSenha.length < 3 ){
        validacaoSenha()
    }else if( cadastroConfirmaSenha != cadastroSenha ){
        confimacaoSenha()
    }
    usuarios.push({
        nome: cadastroNome,
        idade: cadastroSenha,
        id: ids,
        descricao: cadastroDesc,
    });
    let confirma = prompt("Aperte ENTER para continuar...")
    main()
}

function validacaoNome(){
    console.log("Nome inválido...")
    let voltar = prompt("Aperte ENTER para recomeçar...")
    cadastro()
    return
}

function validacaoIdade(){
    console.log("Idade inválida...")
    let voltar = prompt("Aperte ENTER para recomeçar...")
    cadastro()
    return
}

function validacaoSenha(){
    console.log("Senha precisa conter 3 digitos...")
    let voltar = prompt("Aperte ENTER para recomeçar...")
    cadastro()
    return
}
function confirmacaoSenha(){
    console.log("Senha diferente...")
    let voltar = prompt("Aperte ENTER para recomeçar...")
    cadastro()
    return
}

function cadastroPet(){
    console.clear()
    let petNome = prompt("Insira o nome do pet: ")
    let petIdade = parseInt(prompt("Insira idade do pet: "))
    let petEspecie = prompt("Insira a espécie do animal: ")
    let petTipo = prompt("Insira o tipo da espécie: ")
    let petDesc = prompt("Insira uma descrição do pet: ")
    let petId = pets.length + 1

    pets.push({
        nome: petNome,
        idade: petIdade,
        id: petId,
        especie: petEspecie,
        tipo: petTipo,
        descricao: petDesc,
    })
    let confirma = prompt("Aperte ENTER para continuar...")
    main()
}

function logar(){
    console.clear()
    console.log("---- PET TINDER LOGIN ----")
    let nome = prompt("Digite o nome: ")
    let senha = prompt("Digite a senha: ")

    autenticar( nome, senha )

    if( usuario.admin == true ){
        menuAdmin()
    }else{
        menuUsuario()
    }
   
}

function autenticar( Zarabatana, PasseDeBatalha ){

    for(let i = 0; i < usuarios.length; i++){
        if( usuarios[i].nome == Zarabatana && usuarios[i].senha == PasseDeBatalha ){
            usuario = usuarios[i]
            console.log(`Usuário [${usuario.nome}] autenticado com sucesso`)
            let confirma = prompt("Aperte ENTER para prosseguir...")
        }
    }

    if( usuario == null ){
        console.log("Usuário ou senha incorretos...")
    }

}

function menuAdmin(){
    console.clear()
    console.log("---- PET TINDER ADM ----")
    console.log("Opções disponíveis:")
    console.log("[1] - 👤 Listar Usuários")
    console.log("[2] - 🐱 Listar Pets")
    console.log("[3] - 👤🔎 Buscar Usuário")
    console.log("[4] - 🐱🔎 Buscar Pet")
    console.log("[5] - ⛔ Deslogar")

    let opcao = parseInt(prompt("Digite uma opção 👉 "))

    if( opcao == 1){
        listaUsuarios()
    }else if( opcao == 2 ){
        listaPets()
    }else if( opcao == 3 ){
        buscaUsuarios()
    }else if( opcao == 4 ){
        buscaPets()
    }else if( opcao == 5 ){
        main()
    }
}

function listaUsuarios(){
    for( i = 0; i < usuarios.length; i++ ){
        console.log(`${i} - Nome: [${usuarios[i].nome}] | Idade: [${usuarios[i].idade}] | ID: [${usuarios[i].id}] | Descrição: [${usuarios[i].descricao}] `)
    }
    let confirma = prompt("Aperte ENTER para voltar...")
    menuAdmin()
}

function listaPets(){
    for( i = 0; i < pets.length; i++ ){
        console.log(`[${pets[i].id}] - ${pets[i].nome} - ${pets[i].idade} anos - ${pets[i].especie} -> [${pets[i].tipo}] - [${pets[i].descricao}] - adotado = ${pets[i].adotado}`)
    }
    let confirma = prompt("Aperte ENTER para voltar...")
    menuAdmin()
}

function buscaUsuarios(){

    console.clear()

    let nome = prompt("🔎 Digite o nome de usuário que deseja buscar: ")
    nome = nome.toLowerCase()

    for (let i = 0; i < usuarios.length; i++) {

        let aux = usuarios[i].nome
        aux = aux.toLowerCase()
        aux = aux.replaceAll("ô", "o")
        aux = aux.replaceAll("ã", "a")

        if( aux == nome ){
            console.log(`[${usuarios[i].id}] - ${usuarios[i].nome} - [${usuarios[i].descricao}]`)
        }
    }

    prompt("\nAperte ENTER para voltar...")
    menuAdmin()

}

function buscaPets(){

    console.clear()

    let petNome = prompt("🔎 Digite o nome do pet que deseja buscar: ")
    petNome = petNome.toLowerCase()

    for (let i = 0; i < pets.length; i++) {

        let aux = pets[i].nome
        aux = aux.toLowerCase()
        aux = aux.replaceAll("ô", "o")
        aux = aux.replaceAll("ã", "a")

        if( aux == petNome ){
            console.log(`[${pets[i].id}] - ${pets[i].nome} - ${pets[i].idade} anos - ${pets[i].especie} -> [${pets[i].tipo}] - [${pets[i].descricao}] - adotado = ${pets[i].adotado}`)
        }
    }

    prompt("\nAperte ENTER para voltar...")
    menuAdmin()

}

function menuUsuario(){
    console.clear()
    console.log("---- PET TINDER USER ----")
    console.log("Opções disponíveis:")
    console.log("[1] - 🐱 Listar Pets")
    console.log("[2] - 🐱🔎 Buscar Pet")
    console.log("[3] - ⛔ Sair")

    let opcao = parseInt(prompt("Digite uma opção 👉 "))

    if( opcao == 1 ){
        listaPets()
    }else if( opcao == 2 ){
        buscaPets()
    }else if( opcao == 3 ){
        main()
    }else{
        console.log("Opção invalida...")
    }

}
