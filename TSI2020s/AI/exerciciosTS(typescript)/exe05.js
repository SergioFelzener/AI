"use strict";
/*Escreva um algoritmo que leia os três números (possíveis lados de um triângulo) e imprima sua
classificação quanto aos lados:
a) Três lados iguais (equilátero)
b) Dois lados iguais (isósceles)
c) Três lados diferentes (escaleno)*/
exports.__esModule = true;
var rs = require("readline-sync");
var ladoA = Number(rs.question("digite o tamanho do lado A : "));
var ladoB = Number(rs.question("digite o tamanho do lado B : "));
var ladoC = Number(rs.question("digite o tamanho do lado C : "));
if (ladoA == ladoB && ladoB == ladoC) {
    console.log("o triangulo é equilatero");
}
else if (ladoA != ladoB && ladoB != ladoC) {
    console.log("o triangulo é escaleno");
}
else {
    console.log("o triangulo é isoceles");
}
