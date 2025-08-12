// Permitir o inpu do usuário em JS
let prompt = require("prompt-sync")();

//atividadeNome()

function atividadeNome(){
    let nome = prompt("Digite o seu nome: ");
    let sobrenome = prompt("Digite seu sobrenome: ");
    let nome_completo = nome+" "+sobrenome
    console.log("Seja bem-vindo(a) "+nome_completo);    
}

//atividadeIdade()

function atividadeIdade(){
    
    let idade = parseInt(prompt("Digite sua idade: "))
//  idade = parseInt(idade)
     
    let idade_futura = idade + 5

    console.log("Daqui 5 anos você terá: "+idade_futura)

}

// atividadeNascimento()

function atividadeNascimento(){
    
    let ano_atual = 2025
    let nascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
    let atual = ano_atual - nascimento
    console.log("Sua idade atual é: "+atual)
}

// atividadeSoma()

function atividadeSoma(){
    
    let numero1 = parseInt(prompt("Digite o primeiro número: ")); 
    let numero2 = parseInt(prompt("Digite o segundo número: "));
    let soma = numero1 + numero2
    console.log("A soma dos 2 números digitados em sequência é: "+soma)
}

// atividadeDistancia()

function atividadeDistancia(){

    let distancia = parseInt(prompt("Digite uma distancia em metros: "))
    let km = distancia / 1000;
    console.log("A conversão da distância em Kilometros é: "+km)
}

// atividadeNotas()

function atividadeNotas(){
    let notas1 = parseInt(prompt("Digite a Primeira nota de um aluno: "))
    let notas2 = parseInt(prompt("Digite a Segunda nota de um aluno: "))
    let media = (notas1 + notas2) / 2
    console.log("A média das notas de um aluno é: "+media)

}
    
// atividadeTabuada()

function atividadeTabuada(){

    let numero_tabuada = parseInt(prompt("Digite um número qualquer: "))
    let vezes1 = numero_tabuada * 1
    let vezes2 = numero_tabuada * 2
    let vezes3 = numero_tabuada * 3
    let vezes4 = numero_tabuada * 4
    let vezes5 = numero_tabuada * 5
    let vezes6 = numero_tabuada * 6
    let vezes7 = numero_tabuada * 7
    let vezes8 = numero_tabuada * 8
    let vezes9 = numero_tabuada * 9
    let vezes10 = numero_tabuada * 10
    console.log("A tabuada do 1 ao 10 do ultimo número digitado é: \n"+vezes1+"\n"+vezes2+"\n"+vezes3+"\n"+vezes4+"\n"+vezes5+"\n"+vezes6+"\n"+vezes7+"\n"+vezes8+"\n"+vezes9+"\n"+vezes10)
}
