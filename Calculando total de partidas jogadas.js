// Calculando total de partidas jogadas
function partidasRankeadas(vitorias, derrotas) {
    return vitorias + derrotas;
}

let vitorias = 50;
let derrotas = 7;
let total = partidasRankeadas(vitorias, derrotas);
console.log("Total de partidas é " + total);

// Calculando nivel do herói e quantidade de vitórias
let nivelHeroi;
let saldoVitorias = vitorias - derrotas;

if (saldoVitorias < 10) {
    nivelHeroi = "Ferro";
} else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivelHeroi = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivelHeroi = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivelHeroi = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivelHeroi = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivelHeroi = "Lendário";
} else {
    nivelHeroi = "Imortal";
}

console.log("O herói tem um saldo de " + saldoVitorias + " e está no nível de " + nivelHeroi + "!");
