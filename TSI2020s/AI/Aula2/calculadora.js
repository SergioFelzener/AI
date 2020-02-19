"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num1 = rs.question('Entre com um numero: ');
var num2 = rs.question('Entre com um numero: ');
var oper = rs.question('qual operação deseja fazer : somar / subtrair / multiplicar / dividir : ');
if (oper === "somar") {
    var resultado = (num1 + num2);
    console.log("soma é : " + resultado);
}
else if (oper === "subtrair") {
    var resultado = (num1 + num2);
    console.log("subtração é : " + resultado);
}
else if (oper === "multiplicar") {
    var resultado = (num1 + num2);
    console.log("a multiplicação é : " + resultado);
}
else if (oper === "dividir") {
    var resultado = (num1 + num2);
    console.log("a divisão é : " + resultado);
}
else {
    console.log("erro");
}
