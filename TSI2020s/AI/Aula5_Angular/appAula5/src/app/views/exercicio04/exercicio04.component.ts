import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

  imagem1 = 'assets/hiphop02.jpg';
  imagem2 = 'assets/hiphop4.jpg';
  imagem3 = 'assets/hiphop5.jpg';

  classe1 = 'hiphop02';
  classe2 = 'hiphop4';
  classe3 = 'hiphop5';

  constructor() { }

  ngOnInit(): void {
  }

}
