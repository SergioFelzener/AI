"use strict";
//Crie um programa que solicite ao usuário a digitação de um número. 
//Informe então se este número é par ou ímpar.
exports.__esModule = true;
var rs = require("readline-sync");
var num = Number(rs.question('digite um número'));
var parouimpar = num % 2;
if (parouimpar == 0) {
    console.log("numero par");
}
else {
    console.log("numero impar");
}
