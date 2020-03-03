"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num = Number(rs.question("Qual tabuada gostaria de cacular: "));
for (var i = 1; i <= 10; i++) {
    console.log("tabuada do : " + num + " : " + num + " x " + i + " = " + (num * i));
    console.log("tabuada do " + num + " x " + i + " = " + num * i);
}
//let cont = 0;
//while (cont <= 10) {
//    console.log(`Tabuada do  ${num} x ${cont}` + `(${num} * ${cont})`)
//    cont++;
//    
//}
