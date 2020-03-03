"use strict";
// . Solicite que o usuário preencha nomes até que ele digite “sair”. 
// Exiba todos os nomes digitados em sequência :
exports.__esModule = true;
var rs = require("readline-sync");
var continuar = true;
var arraydeNomes = new Array;
do {
    var nome = rs.question('Digite nomes e para sair digite "Sair" : ');
    nome = nome.toLowerCase();
    if (nome === 'sair') {
        continuar = false;
    }
    else {
        arraydeNomes.push(nome);
    }
} while (continuar);
console.log(arraydeNomes);
