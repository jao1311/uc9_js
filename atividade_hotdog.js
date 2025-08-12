let salsicha = 3.5
let pure = 2.15
let salada = 1.90

let pao = 0.90
let palha = 0.50

let simples = pao + palha + salsicha + pure
let duplo = pao + palha + (salsicha * 2) + salada + pure
let especial = pao + palha + (salsicha * 3) + (pure * 2) + salada
simples = simples.toFixed(2) // .toFixed(x) reduz as casas que serão exibidas, se colocado nas variaveis, ele mudara o número, mas se colocado no console.log ele mostra apenas o número corrigido sem alterar nada no número original

duplo = duplo.toFixed(2)
especial = especial.toFixed(2)

console.log("---------------Cardapio---------------\n\nHotdog Simples: R$"+simples+"\nHotdog Duplo: R$"+duplo+"\nHotdog Especial: R$"+especial+"\n\n----Venha Cair de Boca na Salsicha----")
