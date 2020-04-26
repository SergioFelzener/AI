import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-aula05',
  templateUrl: './exe-aula05.component.html',
  styleUrls: ['./exe-aula05.component.css']
})
export class ExeAula05Component implements OnInit {

  valor1: number;
  valor2: number;
  titulo = 'title';


  constructor() { }

  ngOnInit(): void {
  }

  soma(valor1:number, valor2:number):number {
    return valor1 + valor2;
  }

}
