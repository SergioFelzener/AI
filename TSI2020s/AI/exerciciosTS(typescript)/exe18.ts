// . Leia 5 valores do usuário. Exiba todos os valores e indique o maior valor.

import * as rs from 'readline-sync';

let arrayValores: Array<number> = new Array;
let guardaMaiorValor: Number = 0;

function mostraMaior(): void {
    for (let i = 0; i < 5; i++) {
        let valorDigitado = Number(rs.question('digite um valor : '));
        arrayValores.push(valorDigitado);

        if (valorDigitado > guardaMaiorValor){
            guardaMaiorValor = valorDigitado;
        }
    }
    console.log(arrayValores);
    console.log(guardaMaiorValor);
}

mostraMaior();

