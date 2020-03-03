"use strict";
// Crie uma função capaz de ler e retornar o nome do usuário. Através de 
// outra função, capaz de imprimir um valor no console, exiba o nome do usuário.
exports.__esModule = true;
var rs = require("readline-sync");
function leNome() {
    return rs.question('qual seu nome : ');
}
function imprimiNome() {
    console.log(leNome());
}
imprimiNome();
