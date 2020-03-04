import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  titulo = 'Iniciando Curso Angular 2.x';

  constructor() { }

  ngOnInit(): void {
  }

}
