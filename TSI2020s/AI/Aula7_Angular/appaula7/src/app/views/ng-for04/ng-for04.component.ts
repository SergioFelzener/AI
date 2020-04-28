import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for04',
  templateUrl: './ng-for04.component.html',
  styleUrls: ['./ng-for04.component.css']
})
export class NgFor04Component implements OnInit {

  nomes = new Array ();
  nomeLista: string;


  constructor() { }

  ngOnInit(): void {
  }

  adicionarNome(){
    this.nomes.push(this.nomeLista);

    this.nomeLista = '';
  }

}
