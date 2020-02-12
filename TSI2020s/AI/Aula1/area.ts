import * as rs from 'readline-sync';

let base: number = rs.question('Entre base : ');
let altura: number = rs.question('Entre altura: ');

const area = base*altura/2;

console.log(area);