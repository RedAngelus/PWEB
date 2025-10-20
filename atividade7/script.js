function jogar (escolhaUsuario){

let numeroAleatorio = Math.random(); 
let escolhaComputador = "";

if (numeroAleatorio <= 0.33) {
  escolhaComputador = "pedra";
} else if (numeroAleatorio <= 0.66) {
  escolhaComputador = "papel";
} else {
  escolhaComputador = "tesoura";
}

let resultado = "";

if (escolhaUsuario === escolhaComputador) {
  resultado = "Empate!";
} else if (
  (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
  (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
  (escolhaUsuario === "papel" && escolhaComputador === "pedra")
) {
  resultado = "Você venceu!";
} else {
  resultado = "Você perdeu!";
}
alert("O computador escolheu: " + escolhaComputador);
alert("Resultado: " + resultado);
}