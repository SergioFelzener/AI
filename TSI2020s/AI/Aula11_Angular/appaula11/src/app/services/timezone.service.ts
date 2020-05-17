import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimezoneOptions } from '../model/timezone-options';
import { HttpClient } from '@angular/common/http';
import { Timezone } from '../model/timezone';

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  constructor(private http: HttpClient) { }

  public getAllTimezones(): Observable<Array<TimezoneOptions>> {
    return this.http.get<Array<TimezoneOptions>>(
      'http://worldtimeapi.org/api/timezone'
    );
  }

  public getSelectedTimezone(region: string): Observable<Timezone> {
    console.log(`http://worldtimeapi.org/api/timezone/${region}`);
    return this.http.get<Timezone>(`http://worldtimeapi.org/api/timezone/${region}`);
  }
}
