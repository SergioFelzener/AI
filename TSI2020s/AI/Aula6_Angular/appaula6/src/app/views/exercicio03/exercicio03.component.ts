import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  curso: string;
  nome: string;

  constructor() { }

  ngOnInit(): void {
  }

  obterCurso(curso: string): string {
    if (curso === 'TSI') {
      return 'Sistemas para Internet'
    } else if (curso === 'GAST') {
      return 'Gastronomia'
    } else if (curso === 'CIE') {
      return 'Ciência da computação'
    } else if (curso === 'MOD') {
      return 'Moda'
    } else if (curso === 'ADM') {
      return 'Administração'
    }
  }
}
