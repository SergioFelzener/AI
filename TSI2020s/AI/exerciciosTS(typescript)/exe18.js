"use strict";
// . Leia 5 valores do usuário. Exiba todos os valores e indique o maior valor.
exports.__esModule = true;
var rs = require("readline-sync");
var arrayValores = new Array;
var guardaMaiorValor = 0;
function mostraMaior() {
    for (var i = 0; i <= 5; i++) {
        var valorDigitado = Number(rs.question('digite um valor : '));
        arrayValores.push(valorDigitado);
        if (valorDigitado > guardaMaiorValor) {
            guardaMaiorValor = valorDigitado;
        }
    }
    console.log(arrayValores);
    console.log(guardaMaiorValor);
}
mostraMaior();
