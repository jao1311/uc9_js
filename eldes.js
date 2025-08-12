let prompt = require("prompt-sync")()
 
igualDez()
 
function ativi1(){
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
 
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
}
 
function ativi2(){
    let numero = parseInt(prompt("Digite um número: "))
 
if (numero % 2 === 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}
}
 
function ativi3(){
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
 
function ativi4(){
    let numeros = [5, 8, 12]
    let soma = 0
 
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    console.log(`A soma dos valores é: ${soma}`)
}
 
function ativi5(){
    let aluno = {
        nome: "Giovanna",
        idade: 18,
        curso: "Informática"
    }
   
    console.log(`O nome é ${aluno.nome} e o curso é ${aluno.curso}`)
   
}
 
 
 
 
const numeros = [2, 6, 10, 11, 21];
 
function primeiroImpar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
    return undefined;
}
 
 
console.log(primeiroImpar(numeros))
 

function igualDez(numero){
    if(numero === 10){
        return true
    }else {
        return false
    }
}
 

function procurar(a, f) {
    for (let i = 0; i < a.length; i++){
        if ( f(a[i]) == true) {
            return a[i]
        }
    }
}