import * as rs from 'readline-sync';
// criando array 
const numerosPares = new Array<number>();
// criando variavel 
let num : number;

do {
  num = Number(rs.question('digite um número'));

  if (num % 2 === 0){
      numerosPares.push(num);
  }
// quando numero menor que zero finalize a condicao 
} while (num < 0);


console.log(numerosPares);