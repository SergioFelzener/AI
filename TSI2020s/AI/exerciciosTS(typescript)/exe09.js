"use strict";
// Escreva um programa que solicita o nome e a altura de 5 atletas. 
// Ao final da entrada de dados, informe O NOME do atleta mais alto.
exports.__esModule = true;
var rs = require("readline-sync");
var nome;
var altura = 0;
for (var i = 0; i <= 5; i++) {
    var nomeAtleta = (rs.question(" Digite seu nome : "));
    var alt = (rs.question("Qual sua altura : "));
    if (alt > altura) {
        altura = alt;
        nome = nomeAtleta;
    }
}
console.log("Nome :  " + nome + " Altura : " + altura + " .");