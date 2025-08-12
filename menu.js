// MENU DE SISTEMA 
let prompt = require("prompt-sync")()

let nome = ""
let idade = "0"
let ativo = false
let nomes = []
let idades = []


main()
function main(){
    
    console.clear()

    
    console.log("==== 🤑SISTEMA CLONARCARTÃO🤑 ====")
    console.log("1 - 📝 Cadastrar Cartão para Clonagem")
    console.log("2 - 👤 Listar usuários Clonados")
    console.log("3 - ⚙ Sair")
    let opcao = prompt("Escolha uma opção: ")
    
    if(opcao == "1"){
        cadastrar()
        main()
        return
    }else if( opcao == "2" ){
        lista()
    }else if(opcao == "3"){
        return
    }else{
        console.log("OPÇÃO DE CLONAGEM INVÁLIDA!")
        setTimeout(() => {
            main()
        }, 1000);
    }   
    

}
    
function cadastrar(){
    console.clear()
    console.log("==== CADASTRO DE CARTÕES ====")
    nome = prompt("Digite o Nome do Clonado: ")
    nomes.push(nome)
    idade = parseInt ( prompt("Digite a idade do Clonado: ") )
    idades.push(idade)
    ativo = true
    ativo = "Ativo"

}
function lista(){

    console.clear()
    console.log("==== LISTA DE CLONAGEM ====")

    if(nomes == "" ){
        console.log("NENHUMA CLONAGEM CADASTRADa AINDA...")
        setTimeout(() => {
            main()
        }, 1000);
        return
    }else{        
        // CONCATENAÇÃO
        // console.log("1 | Dono: ["+nome+"] | Idade: ["+idade+"] | Status: ["+ativo+"]") 
        for(let i = 0; i < nomes.length; i++){            
            // INTERPOLAÇÃO
            console.log(`${i + 1} - Nome [${nomes[i]}] | Idade: [${idades[i]}] | Status: [${ativo}]`)
        }
            let voltar = prompt("Digite o nome do melhor macaco: ")
            main()
            
    }
}
