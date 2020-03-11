import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostra-maiuscula',
  templateUrl: './mostra-maiuscula.component.html',
  styleUrls: ['./mostra-maiuscula.component.css']
})
export class MostraMaiusculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostraMaiuscula(name: string): string {
    return name.toUpperCase();
  }

}
