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
]



main()
function main(){

    console.clear()
    console.log("Opções disponíveis:")
    console.log("1 - Cadastrar")
    console.log("2 - Listar todos")
    console.log("3 - Buscar por nome")
    console.log("4 - Sair")
    let opcao = prompt("Digite uma opção: ")
    if(opcao == "1"){

        console.clear()

        let nomes = prompt("Digite o nome: ")
        let idades = prompt("Digite a idade: ")
        let ids = usuario.length + 1

        usuario.push({
            nome: nomes,
            idade: idades,
            id: ids
        });
        main()

    }else if(opcao == "2"){
        
        console.clear()

        for(let i = 0; i < usuario.length; i++){
            console.log(`${i+1} - ${"Nome: ["+usuario[i].nome+"] Idade: ["+usuario[i].idade+"] ID: ["+usuario[i].id+"]"}`)
            setTimeout(() => {
                main()
            }, 5 * 1000);
        }

    }else if(opcao == "3"){

        console.clear()

        let posicao = parseInt(prompt("Digite a posição do usuário que quer buscar: "))
        if(usuario.length >= posicao){
            console.log(`Resultado da busca: \nNome: `+usuario[posicao-1].nome+" Idade: "+usuario[posicao-1].idade)
            let escolha = prompt("Deseja alterar as informações desse usuário?( 1 para sim e 2 para não) ")
            if( escolha == "1"){
                alterar( posicao - 1 )
            }else{
                console.log("Voltando a tela inicial...")
                setTimeout(() => {
                    main()
                }, 1 * 1000);                    
            }

        }else{
            console.log("Usuário inexistente")
        }

    }else if(opcao == "4"){
        console.clear()
        console.log("Some daq meo! SOME DAQ!")
        return
    }else{
        console.log("Opção inexistente")
    }

}

function alterar( chapolin_colorado ){
    let novo_nome = prompt("Digite o novo nome: ")
    let nova_idade = prompt("Digite a nova idade:")
    let id_igual = chapolin_colorado + 1
    usuario[ chapolin_colorado ] = {
        nome: novo_nome,
        idade: nova_idade,
        id: id_igual,

    }

    console.log("Nome e idade alterados com xuxesso!")
    setTimeout(() => {
        main()
    }, 1000);
}

function teste(){
    nomes = [ "Pai de Família", "Jailson Mendes", "Suco de laranja" ];
    console.log(`O usuário ${nomes[1]}, um ${nomes[0]} toma ${nomes[2]}`);
    
    nomes[1] = "Ricardo Milos";
    nomes[0] = "Mano de tanga";
    console.log(`O usuário ${nomes[1]}, um ${nomes[0]} toma ${nomes[2]}`);
    
    nomes.push("Docin"); // Adiciona um item no final do array
    console.log(`O usuário ${nomes[1]}, um ${nomes[0]} toma ${nomes[2]} ${nomes[3]}`);
}
//Maça é uma pseudo fruta