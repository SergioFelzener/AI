import * as rs from 'readline-sync';

let n1: number = rs.question('Entre sua nota: ');
let n2: number = rs.question('Entre sua nota: ');
let n3: number = rs.question('Entre sua nota: ');

let media1 = n1*2;
let media2 = n2*3;
let media3 = n3*5;

const ponderada = 10;

let result = (media1 + media2 + media3) / (ponderada);

console.log(result);