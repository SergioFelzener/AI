import { Component, OnInit } from '@angular/core';
import { Covid19 } from "src/app/model/Covid19";
import { Covid19Service } from 'src/app/services/covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  covid19 : Covid19[];

  constructor(private covid19Service: Covid19Service) { }

  ngOnInit(): void {
  }

  listarCovidEstadosBrasil(){
    this.covid19Service.listarCovid().subscribe(arrayCovid => {
      this.covid19 = arrayCovid;
    });

  }

}
