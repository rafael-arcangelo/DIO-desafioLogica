let nomeDoJogador = "Hideki";
let qtdVitorias = 123;
let qtdDerrotas = 68;

function calcularVitorias(qtdVitorias, qtdDerrotas) {
  return saldoVitorias = qtdVitorias - qtdDerrotas;
}

function definirNivel(saldoVitorias) {
  if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias >= 101) {
    nivel = "Imortal"; 
  } else {
    nivel = "Ferro";
  }
  return nivel;
}

saldoVitorias = calcularVitorias(qtdVitorias, qtdDerrotas);
nivel = definirNivel(saldoVitorias);

console.log(`O jogador ${nomeDoJogador} tem ${saldoVitorias} de saldo de vitórias e está no nível ${nivel}.`);