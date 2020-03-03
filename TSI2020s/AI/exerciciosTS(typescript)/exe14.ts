//Escreva uma função que recebe um valor em dólares e é capaz de retornar o valor em reais. Esta
//função deverá chamar outra função capaz de retornar o valor de um dólar em reais (câmbio). Permita
//que o usuário chame a função de cálculo do valor de dólares em reais, informando um valor.

import * as rs from 'readline-sync';

function cambio(valor: number): Number {
    return valor * 4.51;
}

function converter(valor: number): void {
    console.log(cambio(valor));
}

converter(100);
console.log("cotação do dolar R$4,51");
