// Acumular valores em uma variável

let personagem = "Hater da Chikorita"
let moedas = 0

console.log("Bem-vindo ao jogo")
console.log(personagem+": "+moedas+" Moedas")

moedas = 1
console.log(personagem+": "+moedas+" Moedas")

moedas += 1 // não pode ser utilizado em todas as linguagens
// moedas++
// moedas = moedas + 1 -> superior pois é universal
console.log(personagem+": "+moedas+" Moedas")

moedas += 1
moedas += 1
moedas += 5
moedas -= 2
moedas += 3

console.log(personagem+": "+moedas+" Moedas")

moedas += 10
moedas /= 2
moedas += 1 // checkpoint após pegar
let salvamento = moedas
moedas *= 2

console.log(personagem+": "+moedas+" Moedas")

//MORREU

moedas = 0
console.log(personagem+" cometeu suicídio após ver uma alguém falar bem da chikorita")
console.log(personagem+": "+moedas+" Moedas")

//REVIVEU
moedas = salvamento
console.log(personagem+": "+moedas+" Moedas")

