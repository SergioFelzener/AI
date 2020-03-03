"use strict";
// Crie uma função com dois parâmetros numéricos capaz de verificar
// qual número é o maior e retornálo.
exports.__esModule = true;
function retornaMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
console.log(retornaMaior(33, 22));
