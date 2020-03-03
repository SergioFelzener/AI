// 8. Escreva um programa que solicita 10 números e ao final exibe a soma de todos eles.


import * as rs from 'readline-sync';

let soma = 0;

for (let i = 0; i <=10; i++){
    let num = Number(rs.question('digite um número : '));
    soma += num;
}
console.log("total : " + soma);
