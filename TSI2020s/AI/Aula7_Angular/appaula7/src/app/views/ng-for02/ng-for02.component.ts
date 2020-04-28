import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for02',
  templateUrl: './ng-for02.component.html',
  styleUrls: ['./ng-for02.component.css']
})
export class NgFor02Component implements OnInit {

  paises = ['Brasil', 'Estados Unidos', 'França', 'Argentina'];
  capitais = ['Brasilia', 'Whasington', 'Paris', 'Buenos Aires'];


  constructor() { }

  ngOnInit(): void {
  }

  capital(pos: number){
    alert(this.capitais[pos]);
  }

}
