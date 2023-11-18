// Solicita ao usuário que insira um número
let numero = prompt("Digite um número: ");

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

function verificarParOuImpar() {
    let numero = prompt("Digite um número: ")
    if (numero % 2 === 0) {
        alert("O número é par.")
    } else {
        alert("O número é ímpar.")
    }
}