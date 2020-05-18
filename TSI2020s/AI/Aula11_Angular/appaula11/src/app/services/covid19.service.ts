import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Covid19 } from "../model/Covid19";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  public listarCovid(): Observable<Covid19[]>{
    return this.http.get<Covid19[]>('https://covid19-brazil-api.now.sh/api/report/v1');

  }
}
