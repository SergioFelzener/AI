import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})
export class Exercicio05Component implements OnInit {

  class1 = 'class1';
  imagem = "assets/house-loop.jpg";
  ativo = true;

  constructor() { }

  ngOnInit(): void {
  }

  trocarImagem(): void {
    if(this.ativo) {

      this.imagem = 'assets/house-loop.jpg';

    }else {

      this.imagem = 'assets/house-loop2.jpg';

    }
    this.ativo = !this.ativo
  }

}
