import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.css']
})
export class Exercicio07Component implements OnInit {

  classdiv1 = 'divVisivel';
  classdiv2 = 'divInvisivel';
  classdiv3 = 'divInvisivel';
  divAtual = 'div1';

  constructor() { }

  ngOnInit(): void {
  }

  trocarDiv(): void {
    if (this.divAtual === 'div1'){
      this.divAtual = 'div2';
      this.classdiv1 = 'divInvisivel';
      this.classdiv2 = 'divVisivel';
      this.classdiv3 = 'divInvisivel';

    }else if(this.divAtual === 'div2'){
      this.divAtual = 'div3';
      this.classdiv1 = 'divInvisivel';
      this.classdiv2 = 'divInvisivel';
      this.classdiv3 = 'divVisivel';
    } else {
      this.divAtual = 'div1';
      this.classdiv1 = 'divInvisivel';
      this.classdiv2 = 'divVisivel';
      this.classdiv3 = 'divInvisivel';

    }
  }

}
