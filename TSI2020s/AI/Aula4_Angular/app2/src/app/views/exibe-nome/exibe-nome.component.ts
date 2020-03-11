import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-nome',
  templateUrl: './exibe-nome.component.html',
  styleUrls: ['./exibe-nome.component.css']
})
export class ExibeNomeComponent implements OnInit {

  nome = 'Sergio';
  sobrenome ='Felzener';

  constructor() { }

  ngOnInit(): void {
  }

  exibeNome(nome: string, sobrenome: string): string {
    return nome + ' ' + sobrenome;
  }



}
