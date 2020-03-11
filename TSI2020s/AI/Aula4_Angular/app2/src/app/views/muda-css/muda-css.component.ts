import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muda-css',
  templateUrl: './muda-css.component.html',
  styleUrls: ['./muda-css.component.css']
})
export class MudaCssComponent implements OnInit {

  nome = 'Petrobras';
  mudarCor = 'classCss';

  constructor() { }

  ngOnInit(): void {
  }

  mostraMaiuscula(name: string): string {
    return name.toUpperCase();
  }



}
