"use strict";
// . Solicite que seja digitada uma palavra que contenha a letra F ou comece
// com a letra P (pesquisar métodos de manipulação de string em TypeScript 
// se necessário).
exports.__esModule = true;
var rs = require("readline-sync");
var word;
do {
    word = rs.question("Digite uma palavra que tenha F ou comece com P ");
    word = word.toLowerCase();
} while (word.indexOf('f') == -1 && word.indexOf('p') != 0);
