"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
function TipoDeNumero(num) {
    if (num > 0) {
        return "numero é positivo ";
    }
    else if (num < 0) {
        return "numero é negativo ";
    }
    else {
        return "numero é zero ";
    }
}
var num1 = Number(rs.question('digite um numero: '));
console.log('O numero é : ' + num1 + ' : ' + TipoDeNumero(num1));
