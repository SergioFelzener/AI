//Crie um programa que solicite ao usuário a digitação de um número. 
//Informe então se este número é par ou ímpar.

import * as rs from 'readline-sync';

let num = Number(rs.question('digite um número'));

let parouimpar = num % 2;

if (parouimpar == 0) {
    console.log("numero par");
} else {
    console.log("numero impar");
}
