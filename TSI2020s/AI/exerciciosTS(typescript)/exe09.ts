// Escreva um programa que solicita o nome e a altura de 5 atletas. 
// Ao final da entrada de dados, informe O NOME do atleta mais alto.

import * as rs from 'readline-sync';

let nome : String;
let altura : Number = 0;

for (let i = 0; i <=5; i++){
    let nomeAtleta: String = (rs.question(" Digite seu nome : "));
    let alt : Number = (rs.question("Qual sua altura : "));

    if (alt > altura){
        altura = alt;
        nome = nomeAtleta;
    }

}
console.log (`Nome :  ${nome} Altura : ${altura} .`);

