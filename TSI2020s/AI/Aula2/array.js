"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
// criando array 
var numerosPares = new Array();
// criando variavel 
var num;
do {
    num = Number(rs.question('digite um número'));
    if (num % 2 === 0) {
        numerosPares.push(num);
    }
    // quando numero menor que zero finalize a condicao 
} while (num < 0);
console.log(numerosPares);
