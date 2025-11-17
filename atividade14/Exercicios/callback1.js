const prompt = require('prompt-sync')();
function saudacao(nome){
    console.log('oi ' + nome);
}
function entradaNome(callback){
    let nome = prompt ('digite seu nome: ')
    callback(nome);
}
entradaNome(saudacao);