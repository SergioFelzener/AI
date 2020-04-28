import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for03',
  templateUrl: './ng-for03.component.html',
  styleUrls: ['./ng-for03.component.css']
})
export class NgFor03Component implements OnInit {
 
  postTitle = ['post1', 'post2', 'post3'];
  postConteudo = ['teste1',' teste2', 'teste3'];

  constructor() { }

  ngOnInit(): void {
  }

}
