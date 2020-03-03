"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var operacao = rs.question('Digite a operação (* + / -) ');
var num1 = Number(rs.question('Digite o primeiro número : '));
var num2 = Number(rs.question('Digite o segundo número : '));
if (operacao == '*') {
    console.log(multiplicar(num1, num2));
}
else if (operacao == '+') {
    console.log(somar(num1, num2));
}
else if (operacao == '/') {
    console.log(dividir(num1, num2));
}
else {
    console.log(subtrair(num1, num2));
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function somar(num1, num2) {
    return num1 + num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function subtrair(num1, num2) {
    return num1 - num2;
}
