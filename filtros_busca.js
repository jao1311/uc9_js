let prompt = require("prompt-sync")();
// Vetores ( ou ARRAYs ): guardar vários dados em uma só variável

let usuario = 

    [
    {
        nome: "Chaves",
        idade: "8",
        id: 1,
    },
    {
        nome: "Quico",
        idade: "10",
        id: 2,
    },
    {
        nome: "Seu Madruga",
        idade: "44",
        id: 3,
    },
    {
        nome: "Chiquinha",
        idade: "8",
        id: 4,
    },
    {
        nome: "Nhonho",
        idade: "9",
        id: 5,
    },
    {
        nome: "Bruxa do 71",
        idade: "300",
        id: 6,
    },
    {
        nome: "Pópis",
        idade: "9",
        id: 7,
    },
]



main()
function main(){

    console.clear()

    console.log("Opções disponíveis:")
    console.log("1 - Listar todos")
    console.log("2 - Buscar por nome")
    let opcao = prompt("Digite uma opção: ")

    if( opcao == "1"){
        console.log("Opções de listagem:")
        console.log("1 - Crescente")
        console.log("2 - Decrescente")
        let escolha = prompt("Escolha uma opção: ")
        if( escolha == "1" ){
            listaCrescente()
        }else if( escolha == "2" ){
            listaDecrescente()
        }

    let continuar = prompt("Aperte ENTER para prosseguir...")
    main()
    }else if( opcao == "2"){
        console.clear()
        let nome = prompt("Digite o nome do usuário que quer buscar: ")
        //buscaNome(nome)
        buscaParteNome( nome )
        let continuar = prompt("Aperte ENTER para prosseguir...")
        main()
    }
    
}

function buscaParteNome( masqueico ){

    for( i = 0; i <  usuario.length; i++){

    let aux = usuario[i].nome
    aux = aux.toLowerCase()
    aux = aux.replaceAll("ó", "o")

    let nomeMin = masqueico.toLowerCase()
    
        if( aux.includes( nomeMin ) == true ){
            console.log(`Nome: [${usuario[i].nome}] | Idade: [${usuario[i].idade}] | ID: [${usuario[i].id}]`)
        }
    }
}

function buscaNome( homosapiens ){

    for( i = 0; i <  usuario.length; i++){
        if( homosapiens == usuario[i].nome ){
            console.log(`Nome: [${usuario[i].nome}] | Idade: [${usuario[i].idade}] | ID: [${usuario[i].id}]`)
        }
    } 
}

function listaCrescente(){

    for( i = 0; i < usuario.length; i++ ){
        console.log(`${i+1} - Nome: [${usuario[i].nome}] | Idade: [${usuario[i].idade}] | ID: [${usuario[i].id}]`)
    }
}

function listaDecrescente(){

    for( i = usuario.length - 1; i >= 0; i-- ){
        console.log(`${i+1} - Nome: [${usuario[i].nome}] | Idade: [${usuario[i].idade}] | ID: [${usuario[i].id}]`)
    }
}


//Maça é uma pseudo fruta