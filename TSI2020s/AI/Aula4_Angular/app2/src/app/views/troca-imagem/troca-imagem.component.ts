import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-troca-imagem',
  templateUrl: './troca-imagem.component.html',
  styleUrls: ['./troca-imagem.component.css']
})
export class TrocaImagemComponent implements OnInit {

  img1 = '../../assets/img/img1.jpg';
 

  constructor() { }

  ngOnInit(): void {
  }

  trocaImagem(): string {
    if (this.img1 === '../../assets/img/img1.jpg') {
      return this.img1 = '../../assets/img/img2.jpg';
    } else {
     return this.img1 = '../../assets/img/img1.jpg';
    }
  }

