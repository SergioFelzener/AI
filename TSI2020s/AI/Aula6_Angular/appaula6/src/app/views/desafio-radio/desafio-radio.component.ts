import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-radio',
  templateUrl: './desafio-radio.component.html',
  styleUrls: ['./desafio-radio.component.css']
})
export class DesafioRadioComponent implements OnInit {

  valor1 : number;
  valor2 : number;
  operacao : string;
  total : number;


  constructor() { }

  ngOnInit(): void {
  }

  calculadora(){
    if(this.operacao == '+'){
      this.total = this.valor1 + this.valor2;
    }else if (this.operacao == '-'){
      this.total = this.valor1 - this.valor2;
    }else if (this.operacao == '/'){
      this.total = this.valor1 / this.valor2;
    }else if (this.operacao == '*'){
      this.total = this.valor1 * this.valor2;
    }
  }

}
