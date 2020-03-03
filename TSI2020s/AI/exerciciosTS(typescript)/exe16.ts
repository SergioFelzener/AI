// . Solicite que o usuário preencha nomes até que ele digite “sair”. 
// Exiba todos os nomes digitados em sequência :

import * as rs from 'readline-sync';

let continuar: boolean = true;
let arraydeNomes: Array<string> = new Array;

do {
    let nome = rs.question('Digite nomes e para sair digite "Sair" : ');
    nome = nome.toLowerCase();

    if (nome === 'sair') {
        continuar = false;
    } else {
        arraydeNomes.push(nome);
    }
} while (continuar);

console.log(arraydeNomes);


