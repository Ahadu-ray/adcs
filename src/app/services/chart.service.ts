import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient,) { }

  dailyForecast() {
    return this.http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
  
  }
}
