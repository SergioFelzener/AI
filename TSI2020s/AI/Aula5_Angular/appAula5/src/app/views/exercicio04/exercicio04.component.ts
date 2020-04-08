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

  img1 = 'assets/disco.jpg';
  img2 = 'assets/Doppler-2-jpg.jpg';
  img3 = 'assets/house_bombs2.jpg'

  classe1 = 'hiphop02';
  classe2 = 'hiphop4';
  classe3 = 'hiphop5';

  class1 = 'class1';
  class2 = 'class2';
  class3 = 'class3';


  constructor() { }

  ngOnInit(): void {
  }

}
