
// variáveis
let nomeHeroi = ("Homem de Ferro")
let vitorias = (90)
let derrotas = (30)
let nivel 
let saldoFinal

// Função responsável por calcular o saldo final
function saldo(venceu , perdeu){
  let saldoTotal = venceu - perdeu
  return saldoTotal
}

// variável que armazena o retorno da função saldo()
saldoFinal = saldo(vitorias, derrotas)

// Estrutura de Decisão
if (saldoFinal <= 10){
  nivel = "Ferro"
}else if (saldoFinal >= 11 && saldoFinal <= 20) {
  nivel = "Bronze"
}else if (saldoFinal >= 21 && saldoFinal <= 50) {
  nivel = "Prata"
}else if (saldoFinal >= 51 && saldoFinal <= 80) {
  nivel = "Ouro"
}else if (saldoFinal >= 81 && saldoFinal <= 90) {
  nivel = "Diamante"
}else if (saldoFinal >= 91 && saldoFinal <= 100) {
  nivel = "Lendário"
}else if (saldoFinal >= 101) {
  nivel = Imortal
}

// Saída
console.log("O Herói " + nomeHeroi + " tem de saldo " + saldoFinal + " e está no nível de " + nivel)
