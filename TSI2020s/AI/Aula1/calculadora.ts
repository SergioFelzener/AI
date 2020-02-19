import * as rs from 'readline-sync';


function calcular() {
    let num1: number = rs.question('Entre com um numero: ');
    let num2: number = rs.question('Entre com um numero: ');
    let oper: string = rs.question('qual operação deseja fazer : somar / subtrair / multiplicar / dividir');

    if (oper == "somar") {
        let resp = Number(num1) + Number(num2);
    } else {
        if (oper == "subtrair") {
            let resp = Number(num1 - num2);
        } else {
            if (oper == "multiplicar") {
                var resp = Number(num1) * Number(num2);
            } else {
                var resp = Number(num1) / Number(num2);
            }
        }
    }

    console.log(resp);
}