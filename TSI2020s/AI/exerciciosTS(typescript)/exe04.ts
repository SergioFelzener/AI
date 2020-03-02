/*Dê o conceito do aluno conforme sua nota média, considerando:
Entrada: 3 notas (números reais)
Saída: Média das notas e classificação, de acordo com a tabela abaixo:
caso 8 <= média <= 10 → nota A
caso 7 <= média < 8 → nota B
caso 5 <= média < 7 → nota C
caso 4 <= média < 5 → nota D
caso 0 <= média < 4 → nota E*/

import * as rs from 'readline-sync';

let nota1 = Number(rs.question("digite sua nota : "));
let nota2 = Number(rs.question("digite sua nota : "));
let nota3 = Number(rs.question("digite sua nota : "));

let notafinal = (nota1 + nota2 + nota3) / 3;

const imprimiNota = function (notafinal) {
    switch (Math.floor(notafinal)) {
        case 10:
        case 9:
        case 8:
            console.log("nota A");
            break;
        case 7:
            console.log("nota B");
            break;
        case 6:
        case 5:
            console.log("nota C");
            break;
        case 4:
        case 3:
            console.log("nota D");
            break;
        case 2:
        case 1:
            console.log("nota E");
            break;
        case 0:
            console.log("Vacilão");
            break;
        default:
    }
    
}
imprimiNota(notafinal);
