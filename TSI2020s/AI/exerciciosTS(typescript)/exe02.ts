/*Elaborar uma questão de múltipla escolha, de uma disciplina que esteja cursando ou um tema de
interesse, com um enunciado e cinco alternativas, sendo uma correta ou incorreta. Escrever um
programa que mostra a questão na tela, pede a resposta correta e informa ao usuário se este acertou
ou errou.*/

import * as rs from 'readline-sync';


let question = Number(rs.question('Qual Framework vamos usar para trabalhar em MVC : 1-cake   2-Laravel : '));

if (question == 1){
    console.log('resposta errada');
} else {
    console.log('Ácertou')
}


