import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch01',
  templateUrl: './ng-switch01.component.html',
  styleUrls: ['./ng-switch01.component.css']
})
export class NgSwitch01Component implements OnInit {

  canal: string;

  canais = ['Porta dos Fundos', 'Thug Life', 'Cartoon Network', 'X-Games'];

  constructor() { }

  ngOnInit(): void {
  }

}
