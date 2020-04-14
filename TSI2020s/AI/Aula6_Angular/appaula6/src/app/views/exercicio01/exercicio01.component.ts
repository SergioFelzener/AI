import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})
export class Exercicio01Component implements OnInit {

  valor1: number;
  valor2: number;
  resultado: number


  constructor() { }

  ngOnInit(): void {
  }

  soma(valor1: number, valor2: number): number {
    return valor1 + valor2;
    //
    //this.resultado = valor1 + valor2;
  }

}
