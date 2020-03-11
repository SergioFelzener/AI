import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.css']
})
export class ImagensComponent implements OnInit {

  img1 = '../../assets/img/img1.jpg';
  img2 = '../../assets/img/img2.jfif';
  img3 = '../../assets/img/img3.jpg';
  class1 = 'mudacss1';
  class2 = 'mudacss2';
  class3 = 'mudacss3';


  constructor() { }

  ngOnInit(): void {
  }

}
