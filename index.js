const usuarios = [
    { nome: "Aron", idade: 36}, 
    { nome: "Bado", idade: 18},
    { nome: "Pedro", idade: 15},
 ];

function mapera(u){
    const mensagem = `Olá, meu nome é ${usuarios[i].nome} e tenho ${usuarios[i].idade} anos`
    return mensagem
}

function ehMaior(u){
    if (u.idade >= 18) return true
    else return false
}



const msg = usuarios.map(mapear);
const usuariosMaiores = usuarios.filter( ehMaior );
const primeiroMaior = usuarios.find( ehMaior );
const totalIdades = usuarios.reduce( somaIdade )

// for (let i = 0; i < usuarios.length; i++ ) {
//    const mensagem = `Olá, meu nome é ${usuarios[i].nome} e tenho ${usuarios[i].idade} anos`
//    msg.push(mensagem)
// }

 console.log(msg)