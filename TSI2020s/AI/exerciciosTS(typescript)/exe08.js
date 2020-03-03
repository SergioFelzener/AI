"use strict";
// 8. Escreva um programa que solicita 10 números e ao final exibe a soma de todos eles.
exports.__esModule = true;
var rs = require("readline-sync");
var soma = 0;
for (var i = 0; i <= 10; i++) {
    var num = Number(rs.question('digite um número : '));
    soma += num;
}
console.log("total : " + soma);
