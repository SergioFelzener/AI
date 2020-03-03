// Crie uma função com dois parâmetros numéricos capaz de verificar
// qual número é o maior e retornálo.

import * as rs from 'readline-sync';

function retornaMaior(num1:number, num2:number): number {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(retornaMaior(33,22));