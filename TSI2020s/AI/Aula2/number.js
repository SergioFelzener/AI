"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var cont = 0;
var num1 = 0;
do {
    var input = Number(rs.question('Entre com um numero: '));
    if (isNaN(input) == false) {
        num1 += input;
        cont++;
    }
} while (cont < 2);
console.log(num1);
