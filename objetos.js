
let produtos = [
    {
     nome: "Taça",
     preco: 25.9,
     descricao: "Feita pra por líquido dentro, duh",
     restricoes: ["banana"]
    },
    {
     nome: "Copo",
     preco: 25.9,
     descricao: "Mesma coisa que a taça mas de pobre",
     restricoes: ["banana"]
    },
    {
        nome: "Caneca",
        preco: 25.9,
        descricao: "Mema coisa que o copo mas com alça",
        restricoes: ["banana"]
    },
    {
        nome: "Chicra",
        preco: 25.9,
        descricao: "Mema coisa que a caneca",
        restricoes: ["banana"]
    },
]



console.log(produtos[2].nome+" R$ "+produtos[2].preco)





function teste(){
    
    let usuario = {
        nome: "Walter 🐵",
        idade: 52, 
        telefone: "(505) 117-8987", //Da pra colocar vetor aqui, e é possivel colocar um objeto dentro de outro objetooo
        endereco: {
            rua: "Barzin da esquina",
            numero: "51",
            bairro: "Esquina",  
        }
    }
    
    console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e o número de telefone é ${usuario.telefone}`)
    console.log(`Ele trabalha no ${usuario.endereco.rua}, vende ${usuario.endereco.numero} e o bar é na ${usuario.endereco.bairro}`)
    
}
