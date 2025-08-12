// Atividade Café
let usuario1 = "Conrado"
let usuario2 = "Pedrita"
let idade_1 = 15
let idade_2 = 19
let cliente_1 = "false"
let cliente_2 = "true"
let pedidos_1 = 187
let pedidos_2 = 5
let total = pedidos_1 + pedidos_2
let restante_1 = 200 - pedidos_1
let restante_2 = 200 - pedidos_2

console.log("☕Atividade Café☕\nOlá\nBem-vindo ao sistema de usuários do Conradito\nAbaixo estão as informações dos usuários cadastrados no sistema:\n----Lista de usuários:\n1-Nome: "+usuario1+", idade: "+idade_1+". É cliente: "+false+"\n1-Nome: "+usuario2+", idade: "+idade_2+". É cliente: "+true+"\n\n----Quantidade de cafés:\nO cliente "+usuario1+"já tomou "+pedidos_1+" cafés!\nO cliente "+usuario2+" já tomou "+pedidos_2+" cafés!\n\n----A soma dos cafés tomados:\nJuntos, os clientes "+usuario1+" e "+usuario2+" tomaram "+total+" cafés!\n\n----Quantos cafés cada falta para chegar em 200?\n Faltam "+restante_1+" para "+usuario1+"\nFaltam "+restante_2+" para "+usuario2);

// Atividade Extra

let nova_compra1 = 15
let nova_compra2 = 3
let pedidos_1_atualizado = pedidos_1 + nova_compra1
let pedidos_2_atualizado = pedidos_2 + nova_compra2
let preco = 3.50
let gastos_1 = pedidos_1_atualizado * preco
let gastos_2 = pedidos_2_atualizado * preco
let desconto_1 = gastos_1 / 2
let desconto_2 = gastos_2 / 2

console.log("🤑Atividade Extra🤑\n\n---- 1 - Conrado comprou 15 e Pedrita 3, quantos eles compram até agora?\nO "+usuario1+" comprou "+pedidos_1_atualizado+" cafés até agora!\nA "+usuario2+" comprou "+pedidos_2_atualizado+" cafés até agora!")
console.log("---- 2 - Quanto dinheiro em R$ cada usuário desembolsou em cafés? Cada café custa R$3.50\nO "+usuario1+" gastou R$ "+gastos_1+" em café até o momento! (possivelmente haverá mais gastos)\nO "+usuario2+" gastou R$ "+gastos_2+" em café até o momento!")
console.log("---- 3 - Quantos eles gastariam com 50% de desconto?\nO "+usuario1+" teria um gasto de R$ "+desconto_1+" em café com os 50% de desconto!\nA "+usuario2+" teria um gasto de R$ "+desconto_2+" em café com os 50% de desconto!")