import * as rs from 'readline-sync';

let cont = 0;
let num1: number = 0;


do {
    let input: number = Number(rs.question('Entre com um numero: '));
    if (isNaN (input) == false ){
        num1 += input;
        cont ++;
    }

} while (cont < 2);

console.log(num1)
