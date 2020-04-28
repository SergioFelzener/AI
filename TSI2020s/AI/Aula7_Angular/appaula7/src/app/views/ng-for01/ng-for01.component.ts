import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for01',
  templateUrl: './ng-for01.component.html',
  styleUrls: ['./ng-for01.component.css']
})
export class NgFor01Component implements OnInit {

  imagens = ['lounge1.jpg','lounge3.jpg','lounge5.jpg','lounge7.jpg']
  imagemcss = 'img';

  constructor() { }

  ngOnInit(): void {
  }

  alerta(msg:string){
    alert(msg);
  }

}
