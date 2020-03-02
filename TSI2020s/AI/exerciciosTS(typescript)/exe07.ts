import * as rs from 'readline-sync';

let num = Number(rs.question("Qual tabuada gostaria de cacular solicite de 1 a 10:"));

let cont = 0;
while (cont <= 10) {
    console.log(`Tabuada do  ${num} x ${cont}` + `(${num} * ${cont})`)
    cont++;
    
}
