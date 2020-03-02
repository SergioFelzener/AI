"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num = Number(rs.question("Qual tabuada gostaria de cacular solicite de 1 a 10:"));
var cont = 0;
while (cont <= 10) {
    console.log("Tabuada do  " + num + " x " + cont + ("(" + num + " * " + cont + ")"));
    cont++;
}
