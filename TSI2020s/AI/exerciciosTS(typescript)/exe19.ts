// Colete 3 números do usuário, coloque-os em um vetor e exiba-o. Em seguida, 
// modifique o array de forma que a sequência de números fique do contrário 
// (se digitou 1,2,3, exiba 3,2,1).

import * as rs from 'readline-sync';

let ArrayUser: Array<number> = new Array;
let ArrayInvertido: Array<number> = new Array;

function inverteArray(): void {

    for (let i = 0; i < 3; i++) {
        let numeroDigitado = Number(rs.question('Digite um numero : '));
        ArrayUser.push(numeroDigitado);
    }
    ArrayInvertido = ArrayUser.slice(0).reverse();

    console.log(ArrayUser);
    console.log(ArrayInvertido);
}
inverteArray();