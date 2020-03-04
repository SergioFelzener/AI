import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  somar(){
    let num1 = Number(prompt('digite numero : '));
    let num2 = parseInt(prompt('digite numero : '));

    let total = (num1 + num2);

    alert(total);
  }



}
