import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  genero: string;

  constructor() { }

  ngOnInit(): void {
  }

  obterGenero(genero: string): string {
    if (genero === 'masc'){
      return 'Masculino'
    } else if (genero === 'fem'){
      return 'Feminino'
    }else if (genero === 'outro'){
      return 'Outro'
    }
  }

}
