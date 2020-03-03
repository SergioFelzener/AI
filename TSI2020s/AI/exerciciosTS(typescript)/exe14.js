"use strict";
//Escreva uma função que recebe um valor em dólares e é capaz de retornar o valor em reais. Esta
//função deverá chamar outra função capaz de retornar o valor de um dólar em reais (câmbio). Permita
//que o usuário chame a função de cálculo do valor de dólares em reais, informando um valor.
exports.__esModule = true;
function cambio(valor) {
    return valor * 4.51;
}
function converter(valor) {
    console.log(cambio(valor));
}
converter(100);
console.log("cotação do dolar R$4,51");
