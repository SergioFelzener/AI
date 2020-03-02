"use strict";
// Escreva um programa TypeScript que exiba os números 
// pares de 2 a 12 utilizando laços de repetição.
exports.__esModule = true;
var paresAte12 = 1;
do {
    if (paresAte12 % 2 == 0) {
        console.log(paresAte12);
    }
    paresAte12++;
} while (paresAte12 <= 12);
