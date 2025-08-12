let prompt = require("prompt-sync")();

main()
function main(){

    let nome = prompt("Digite seu nome: ")
    let idade = parseInt(prompt("Digite sua idade: "))
    let cpf = prompt("Digite seu CPF: ")
    let email = prompt("Digite seu email: ")
    let senha = prompt("Digite sua senha: ")
    let confirmaSenha = prompt("Confirme a senha: ")
    cpf = cpf.replaceAll(".", "" || "-", "")
    
    
    if( nome.length < 3 ){
        validacaoNome()  
    }else if( idade < 18 || idade > 99 ){
        validacaoIdade()
    }else if( cpf.length != 11 ){
        validacaoCPF
    }else if( email = email.inclues("@") == true && email.incluedes(".") == true || email.length >= 10 ){
        validacaoEmail()
    }else if( senha.length < 6 ){
        validacaoSenha()
    }else if( confirmaSenha != senha ){
        confimacaoSenha()
    }

}

function validacaoNome(){
    console.log("Nome inválido...")
    main()
    return
}

function validacaoIdade(){
    console.log("Idade inválida...")
    main()
    return
}

function validacaoCPF(){
    console.log("CPF inválido...")
    main()
    return
}

function validacaoEmail(){
    console.log("Email inválido...")
    main()
    return
}

function validacaoSenha(){
    console.log("Senha precisa conter 6 digitos...")
    main()
    return
}
function confirmacaoSenha(){
    console.log("Senha diferente...")
    main()
    return
}