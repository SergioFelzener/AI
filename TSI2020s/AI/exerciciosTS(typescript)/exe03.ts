//Um ano é bissexto se for divisível por 4 exceto os séculos, que são bissextos se forem múltiplos de 400.
//Escreva um programa que lê um ano e determina se este é bissexto.

import * as rs from 'readline-sync';

let ano = Number(rs.question('Qual ano gostaria de saber se é bissexto? : '));

if (((ano % 4 == 0) &&  (ano % 100 != 0)) || (ano % 400 == 0)) {
    console.log(`${ano} é um ano bissexto`);

} else {
    console.log(`${ano} não é um ano bissexto`);
}