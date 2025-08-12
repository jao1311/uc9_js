// Condições Simples
let prompt = require("prompt-sync")();

let idade = 17;

// > maior
// < menor
// == igual
// != diferente
// >= maior ou igual
// <= menor ou igual

function exemplo(){

    if( idade >= 18 ){
        console.log("Você já pode tirar CNH")
    }else{
        console.log("Você ainda não tem idade para tirar CNH")
    }
    
    let senha = prompt("Digite a senha do sistema: ")
    
    if( senha == 29 ){
        console.log("Acesso concedido")
    }else{
        console.log("Errou burro kkkkkkkkkkkkkkk")
    }
}

//atividadePEXI()

function atividadePEXI(){

    let kilos1 = 50
    let kilos2 = 55.9
    let quantidade = parseInt(prompt("Digite quantos kilos de peixe deseja: "))
    let preçoNormal = quantidade * kilos1
    let preçoSalgado = quantidade * kilos2
    if( quantidade > 100 ){
         console.log("Preço por kilo: R$ "+kilos2)
         console.log("Você pagou R$"+preçoSalgado.toFixed(2)+" em peixe")
    }else{
        console.log("Preço por kilo: R$ "+kilos1)
        console.log("Você pagou R$"+preçoNormal.toFixed(2)+" em peixe")
     }
}

//atividadePoN()

function atividadePoN(){
    let numero = parseInt(prompt("Digite um número: "))
    if( numero >= 0 ){
        console.log("Seu número "+numero+", é positivo")
    }else{
        console.log("Seu número "+numero+", é negativo")
    }

}

atividadeCompra()

function atividadeCompra(){
    let valor = parseInt(prompt("Digite o valor da compra: "))
    let tipo = parseInt(prompt("Sua compra será no crédito?(Responda com '0' ou '1') "))
    let porcentagem = 0
    let total = 0
    if( tipo == 0 ){
        porcentagem = valor * 0.05
        total = valor + porcentagem
        console.log("Compra será efetuada no crédito")
        console.log("Um acréscimo de 5% ao valor da compra será cobrado")
        console.log("Valor total da compra será: R$"+total)
    }
    if( tipo == 1){
        porcentagem = valor * 0.10
        total = valor - porcentagem
        console.log("A compra será efetuada no débito")
        console.log("Haverá desconto de 10% ao valor da compra")
        console.log("Valor total da compra será: R$"+total)
    }
    
}

//atividadeCPF()

function atividadeCPF(){
    let cpf = prompt("Digite o CPF(SEM PONTUAÇÕES): ")
    if( cpf.length < 11 || cpf.length > 11){
        console.log("Vai se ferra, coloca um CPF certo seu/sua bosta")
    }else{
        console.log("Muito obrigado, irei comprar um carro no seu nome!")
    }
}

//atividadeNum()

function atividadeNum(){
    let num1 = parseInt(prompt("Digite um número: "))
    let num2 = parseInt(prompt("Digite outro número: "))
    let soma = num1 + num2
    if( soma > 50 ){
        soma = soma + 10
        console.log("A soma dos 2 números + 10 é: "+soma)
    }else{
        soma = soma - 20
        console.log("A soma dos 2 números - 20 é: "+soma)
    }
}


// atividadeNum2()

function atividadeNum2(){
    let num1 = parseInt(prompt("Digite um número: "))
    let num2 = parseInt(prompt("Digite um segundo número: "))
    if( num1 < num2 ){
        console.log("Os 2 números em ordem crescente será: "+num1+", "+num2)
    }else{
        console.log("Os 2 números em ordem crescente será: "+num2+", "+num1)
    }
}