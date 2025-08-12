let prompt = require("prompt-sync")()

//Operador E e operador OU nas condições

function exemploPagamento(){
    
    let pagamento = prompt("Selecione: crédito, débito, pix ou dinheiro")

    if( pagamento == "credito" ){
        console.log("Você seleciounou crédito")
    }else if( pagamento == "debito"){
        console.log("Você seleciounou débito")
    }

}

//atividadeCNH() //OU

function atividadeCNH(){
    let idade = parseInt(prompt("Digite sua idade: "))
    
    if( idade >= 120){
        console.log("💀💀")
    }else if( idade >= 65){
        console.log("Teste especial para renovar a CNH")
    }else if( idade >= 18){
        console.log("Já pode tirar a CNH")
    }else{
        console.log("Você ainda não pode tirar a CNH")
    }
}

//login()

function login(){
    let usuario = prompt("Digite seu usuário: ")
    let senha = prompt("Digite sua senha: ")

    //o && funciona se os 2 forem verdadeiros
    if( usuario == "admin" && senha == "123"){
        console.log("Acesso liberado!")
    }else{
        console.log("Usuário ou senha incorretos...")
    }
}

//exemploResposta()

function exemploResposta(){

    let resposta = prompt("Deseja cadastrar o débito automático? ")

    if (
        resposta == "sim" || resposta == "SIM" || resposta == "Sim" || resposta == "sIm" || resposta == "siM" ||
        resposta == "SIm" || resposta == "sIM" || resposta == "SiM" || resposta == "s" || resposta == "S" ||
        resposta == "yes" || resposta == "YES" || resposta == "Yes" || resposta == "YeS" || resposta == "yEs" ||
        resposta == "YEs" || resposta == "y" || resposta == "Y" || resposta == "claro" || resposta == "Claro" ||
        resposta == "CLARO" || resposta == "cLARO" || resposta == "clARO" || resposta == "cLaro" || resposta == "com certeza" ||
        resposta == "Com certeza" || resposta == "COM CERTEZA" || resposta == "certeza" || resposta == "Certeza" ||
        resposta == "positivo" || resposta == "Positivo" || resposta == "POSITIVO" || resposta == "pOsItIvO" ||
        resposta == "affirmative" || resposta == "Affirmative" || resposta == "AFFIRMATIVE" || resposta == "true" ||
        resposta == "True" || resposta == "TRUE" || resposta == "1" || resposta == "ok" || resposta == "OK" ||
        resposta == "Ok" || resposta == "oK" || resposta == "confirmo" || resposta == "Confirmo" || resposta == "CONFIRMO" ||
        resposta == "concordo" || resposta == "Concordo" || resposta == "CONCORDO" || resposta == "de acordo" ||
        resposta == "De acordo" || resposta == "DE ACORDO" || resposta == "exatamente" || resposta == "Exatamente" ||
        resposta == "EXATAMENTE" || resposta == "isso" || resposta == "Isso" || resposta == "ISSO" ||
        resposta == "aceito" || resposta == "Aceito" || resposta == "ACEITO" || resposta == "vai" ||
        resposta == "Vai" || resposta == "VAI" || resposta == "aceitável" || resposta == "Aceitável" ||
        resposta == "ACEITÁVEL" || resposta == "concedo" || resposta == "Concedo" || resposta == "CONCEDO" ||
        resposta == "favorável" || resposta == "Favorável" || resposta == "FAVORÁVEL" || resposta == "correto" ||
        resposta == "Correto" || resposta == "CORRETO" || resposta == "justo" || resposta == "Justo" ||
        resposta == "JUSTO" || resposta == "perfeito" || resposta == "Perfeito" || resposta == "PERFEITO" ||
        resposta == "valeu" || resposta == "Valeu" || resposta == "VALEU" || resposta == "uhum" ||
        resposta == "Uhum" || resposta == "UHUM" || resposta == "tá" || resposta == "Tá" || resposta == "TÁ" ||
        resposta == "ta" || resposta == "Ta" || resposta == "TA" || resposta == "confirmado" || resposta == "Confirmado" ||
        resposta == "CONFIRMADO" || resposta == "pode ser" || resposta == "Pode ser" || resposta == "PODE SER" ||
        resposta == "autorizo" || resposta == "Autorizo" || resposta == "AUTORIZO" || resposta == "autorizado" ||
        resposta == "Autorizado" || resposta == "AUTORIZADO" || resposta == "tudo bem" || resposta == "Tudo bem" ||
        resposta == "TUDO BEM" || resposta == "okey" || resposta == "Okey" || resposta == "OKEY" ||
        resposta == "aceitável" || resposta == "Aceitável" || resposta == "ACEITÁVEL" || resposta == "vamos" ||
        resposta == "Vamos" || resposta == "VAMOS" || resposta == "show" || resposta == "Show" || resposta == "SHOW" ||
        resposta == "massa" || resposta == "Massa" || resposta == "MASSA" || resposta == "demorô" || resposta == "Demorô" ||
        resposta == "DEMORÔ" || resposta == "tamo junto" || resposta == "Tamo junto" || resposta == "TAMO JUNTO" ||
        resposta == "claro que sim" || resposta == "Claro que sim" || resposta == "CLARO QUE SIM" ||
        resposta == "sem dúvidas" || resposta == "Sem dúvidas" || resposta == "SEM DÚVIDAS" ||
        resposta == "certo" || resposta == "Certo" || resposta == "CERTO" || resposta == "fechado" ||
        resposta == "Fechado" || resposta == "FECHADO" || resposta == "positivamente" || resposta == "Positivamente" ||
        resposta == "POSITIVAMENTE" || resposta == "já era" || resposta == "Já era" || resposta == "JÁ ERA" ||
        resposta == "convincentemente" || resposta == "Convincentemente" || resposta == "CONVINCENTEMENTE" ||
        resposta == "suave" || resposta == "Suave" || resposta == "SUAVE" || resposta == "beleza" || resposta == "Beleza" ||
        resposta == "BELEZA" || resposta == "vambora" || resposta == "Vambora" || resposta == "VAMBORA" ||
        resposta == "confirma" || resposta == "Confirma" || resposta == "CONFIRMA" || resposta == "vai nessa" ||
        resposta == "Vai nessa" || resposta == "VAI NESSA" || resposta == "com certeza que sim" || resposta == "Com certeza que sim" ||
        resposta == "COM CERTEZA QUE SIM" || resposta == "estou de acordo" || resposta == "Estou de acordo" ||
        resposta == "ESTOU DE ACORDO" || resposta == "pode crer" || resposta == "Pode crer" || resposta == "PODE CRER" ||
        resposta == "com toda certeza" || resposta == "Com toda certeza" || resposta == "COM TODA CERTEZA" ||
        resposta == "manda ver" || resposta == "Manda ver" || resposta == "MANDA VER" || resposta == "tudo certo" ||
        resposta == "Tudo certo" || resposta == "TUDO CERTO" || resposta == "tô dentro" || resposta == "Tô dentro" ||
        resposta == "TÔ DENTRO" || resposta == "isso aí" || resposta == "Isso aí" || resposta == "ISSO AÍ" ||
        resposta == "isso mesmo" || resposta == "Isso mesmo" || resposta == "ISSO MESMO" ||
        resposta == "é claro" || resposta == "É claro" || resposta == "É CLARO"
      ) {           
        console.log("Débito cadastrado com sucesso!")
    }else{
        console.log("Não será cadastrado...")
    }

}

//atividadeGOL()

function atividadeGOL() {
    let time1 = prompt("Digite o nome do time da casa: ");
    let time2 = prompt("Digite o nome do time visitante: ");
    let gol1 = parseInt(prompt("Digite a quantidade de gols do time da casa: "));
    let gol2 = parseInt(prompt("Digite a quantidade de gols do time visitante: "));

    if (gol1 > gol2 || gol1 < gol2) {
        console.log("Quantidade de gols do time da casa: " + gol1);
        console.log("Quantidade de gols do time visitante: " + gol2);

        let vencedor;

        if (gol1 > gol2) {
            vencedor = time1;
        } else {
            vencedor = time2;
        }

        console.log("Vencedor: " + vencedor);
    } else {
        console.log("Ambos perderam kkkkkkkkkkkkkkkk");
    }
}

investigacao()

function investigacao(){
    let telefonou = prompt("Telefonou para a vítima?");
    let local = prompt("Esteve no local do crime?");
    let mora = prompt("Mora perto da vítima?");
    let devia = prompt("Devia para a vítima?");
    let trabalhou = prompt("Trabalhou com a vítima?");

    let soma = 0;

    if (
        telefonou === "sim" || telefonou === "Sim" || telefonou === "s" || telefonou === "S" || 
        telefonou === "SIM" || telefonou === "ss" || telefonou === "simm" || telefonou === "claro" || 
        telefonou === "yes" || telefonou === "yep" || telefonou === "affirmativo" || 
        telefonou === "com certeza" || telefonou === "pode crer" || telefonou === "aham"
    ) {
        soma = soma + 1;
    }

    if (
        local === "sim" || local === "Sim" || local === "s" || local === "S" || 
        local === "SIM" || local === "ss" || local === "simm" || local === "claro" || 
        local === "yes" || local === "yep" || local === "affirmativo" || 
        local === "com certeza" || local === "pode crer" || local === "aham"
    ) {
        soma = soma + 1;
    }

    if (
        mora === "sim" || mora === "Sim" || mora === "s" || mora === "S" || 
        mora === "SIM" || mora === "ss" || mora === "simm" || mora === "claro" || 
        mora === "yes" || mora === "yep" || mora === "affirmativo" || 
        mora === "com certeza" || mora === "pode crer" || mora === "aham"
    ) {
        soma = soma + 1;
    }

    if (
        devia === "sim" || devia === "Sim" || devia === "s" || devia === "S" || 
        devia === "SIM" || devia === "ss" || devia === "simm" || devia === "claro" || 
        devia === "yes" || devia === "yep" || devia === "affirmativo" || 
        devia === "com certeza" || devia === "pode crer" || devia === "aham"
    ) {
        soma = soma + 1;
    }

    if (
        trabalhou === "sim" || trabalhou === "Sim" || trabalhou === "s" || trabalhou === "S" || 
        trabalhou === "SIM" || trabalhou === "ss" || trabalhou === "simm" || trabalhou === "claro" || 
        trabalhou === "yes" || trabalhou === "yep" || trabalhou === "affirmativo" || 
        trabalhou === "com certeza" || trabalhou === "pode crer" || trabalhou === "aham"
    ) {
        soma = soma + 1;
    }

    if (soma === 2) {
        console.log("Suspeita");
    } else if (soma === 3 || soma === 4) {
        console.log("Cúmplice");
    } else if (soma === 5) {
        console.log("Assassino");
    } else {
        console.log("Inocente");
    }
}
