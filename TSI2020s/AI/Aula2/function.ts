import * as rs from 'readline-sync';

function TipoDeNumero(num : number) : string {
    if (num > 0) {
        return "numero é positivo ";
    } else if (num < 0) {
        return "numero é negativo ";
    } else {
        return "numero é zero ";
    }
}

const num1 = Number(rs.question('digite um numero: '))

console.log('O numero é : ' + TipoDeNumero(num1));

