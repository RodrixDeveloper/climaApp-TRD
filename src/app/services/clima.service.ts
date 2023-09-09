import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  key = '0eaf5521aa8f9d27c61dbc00daa0ef1a';
  // url = 'http://api.openweathermap.org/data/2.5/forecast?q=bolivia&appid=0eaf5521aa8f9d27c61dbc00daa0ef1a'

  constructor(private http:HttpClient) {}

  getClima(ciudad:string):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${this.key}`)
  }
}
