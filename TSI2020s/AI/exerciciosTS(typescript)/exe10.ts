// . Solicite que seja digitada uma palavra que contenha a letra F ou comece
// com a letra P (pesquisar métodos de manipulação de string em TypeScript 
// se necessário).


import * as rs from 'readline-sync';

let word: String;

do {
    word = rs.question(`Digite uma palavra que tenha F ou comece com P `);
    word = word.toLowerCase();
} while (word.indexOf('f') == -1 && word.indexOf('p') != 0);

