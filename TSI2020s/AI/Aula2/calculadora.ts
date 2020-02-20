import * as rs from 'readline-sync';


let num1: number = rs.question('Entre com um numero: ');
let num2: number = rs.question('Entre com um numero: ');
let oper: string = rs.question('qual operação deseja fazer : somar / subtrair / multiplicar / dividir : ');


if (oper === "somar") {
    const resultado = num1 + num2;
    console.log("soma é : " + resultado);
} else if (oper === "subtrair") {
    const resultado = (num1 + num2);
    console.log("subtração é : " + resultado);
} else if (oper === "multiplicar"){
    const resultado = (num1 + num2);
    console.log("a multiplicação é  é : " + resultado);
} else if (oper === "dividir"){
    const resultado = (num1 + num2);
    console.log("a divisão é : " + resultado);
} else {
    console.log("erro");
}


