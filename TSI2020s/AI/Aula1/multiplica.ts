import * as rs from 'readline-sync';

const n1: number = rs.question('Entre um número: ');
const n2: number = rs.question('Entre um número: ');
const n3: number = rs.question('Entre um número: ');

let result = n1*n2*n3;

console.log(result);
