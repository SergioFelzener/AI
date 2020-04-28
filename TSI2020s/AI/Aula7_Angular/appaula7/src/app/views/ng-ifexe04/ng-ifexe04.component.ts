import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifexe04',
  templateUrl: './ng-ifexe04.component.html',
  styleUrls: ['./ng-ifexe04.component.css']
})
export class NgIfexe04Component implements OnInit {

  num1: number;
  num2: number;
  num3: number;
  num4: number;

  resultado: number;
  resultado2: number;


  constructor() { }

  ngOnInit(): void {
  }

  somar(){
    this.resultado = this.num1 + this.num2
  }
  subtrair(){
    this.resultado = this.num1 - this.num2
  }
  multiplicar(){
    this.resultado = this.num1 * this.num2
  }
  dividir(){
    this.resultado = this.num1 / this.num2
  }

  calcular(operacao: string) {
    if (operacao == 'somar') {
      this.resultado2 = this.num3 + this.num4
    }else if (operacao == 'subtrair') {
      this.resultado2 = this.num3 - this.num4
    }else if (operacao == 'multiplicar'){
      this.resultado2 = this.num3 * this.num4
    }else if (operacao == 'dividir') {
      this.resultado2 = this.num3 / this.num4
    }
  }

}
