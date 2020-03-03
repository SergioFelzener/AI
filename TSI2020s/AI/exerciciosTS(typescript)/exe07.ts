// Crie um programa que solicita o numero para o usuario e calcule a tabuada : (typescript);



import * as rs from 'readline-sync';

let num = Number(rs.question("Qual tabuada gostaria de cacular: "));

for (let i = 1; i <= 10; i++) {
    console.log("tabuada do : " + num + " : " + num + " x " + i + " = " + (num * i));
    console.log(`tabuada do ${num} x ${i} = ${num * i}`);

}







//let cont = 0;
//while (cont <= 10) {
//    console.log(`Tabuada do  ${num} x ${cont}` + `(${num} * ${cont})`)
//    cont++;
//    
//}
