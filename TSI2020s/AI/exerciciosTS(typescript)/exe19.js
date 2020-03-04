"use strict";
// Colete 3 números do usuário, coloque-os em um vetor e exiba-o. Em seguida, 
// modifique o array de forma que a sequência de números fique do contrário 
// (se digitou 1,2,3, exiba 3,2,1).
exports.__esModule = true;
var rs = require("readline-sync");
var ArrayUser = new Array;
var ArrayInvertido = new Array;
function inverteArray() {
    for (var i = 0; i < 3; i++) {
        var numeroDigitado = Number(rs.question('Digite um numero : '));
        ArrayUser.push(numeroDigitado);
    }
    ArrayInvertido = ArrayUser.slice(0).reverse();
    console.log(ArrayUser);
    console.log(ArrayInvertido);
}
inverteArray();
