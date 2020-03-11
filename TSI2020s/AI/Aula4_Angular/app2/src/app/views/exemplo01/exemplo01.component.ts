import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.css']
})
export class Exemplo01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  somarValores(val1: number, val2: number): number{

    return val1 + val2;

  }





}
