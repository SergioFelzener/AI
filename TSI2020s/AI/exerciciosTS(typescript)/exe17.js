"use strict";
//Crie um vetor de 50 posições, preencha com números aleatórios de 1 a 100 e 
//exiba a média destes. Pesquise como gerar números aleatórios em TypeScript.
exports.__esModule = true;
var array = new Array;
var total = 0;
var media = 0;
function mediaArray() {
    for (var i = 0; i < 50; i++) {
        array[i] = Math.floor(Math.random() * 100 + 1);
        total += array[i];
    }
    media = total / 50;
    console.log("" + array);
    console.log(array);
    console.log("total do array : " + total + " ");
    console.log('A média de valores do Array Random é : ' + media);
}
mediaArray();
