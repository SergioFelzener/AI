import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  styleClass = 'petroleo';
  styleClass2 = 'petroleo2';
  varPetrobras = 'petrobras'

  constructor() { }

  ngOnInit(): void {
  }
  paraMaiusculas(palavra: string) : string {
    return palavra.toUpperCase();

  }

}
