import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.css']
})
export class Exercicio06Component implements OnInit {

name = '';
varFoto1 = 'foto1';
varFoto2 = 'foto2';
varFoto3 = 'foto3';


  constructor() { }

  ngOnInit(): void {
  }

  trocarFoto(nome: string): void {
    this.name = nome;
  }

}
