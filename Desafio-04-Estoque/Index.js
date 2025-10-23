let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

if (operacao == 1) {
    estoque += quantidade;
    console.log(estoque)
} else if (operacao == 2) {
    if (quantidade > estoque) {
        console.log("Estoque insuficiente")
    } else {
        (estoque -= quantidade)
        console.log(estoque)
    }
} else {
    console.log("Operação inválida")
}
