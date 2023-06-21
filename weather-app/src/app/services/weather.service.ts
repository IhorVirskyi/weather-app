import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherInfo } from "../interfaces/weather";
import {delay, Observable} from "rxjs";

const ROUTES = {
  weatherInfo: () => 'https://api.openweathermap.org/data/2.5/weather'
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly DEFAULT_UNIT = 'metric';
  private readonly APP_ID = '903d99fa7fc59eb260f520af7b82036d';
  private readonly DEFAULT_PARAMS: { [param: string]: string } = {
    units: this.DEFAULT_UNIT,
    appId: this.APP_ID
  }

  constructor(private http: HttpClient) {
  }


  getWeather$(city: string): Observable<WeatherInfo> {
    return this.http.get<WeatherInfo>(ROUTES.weatherInfo(), {params: {...this.DEFAULT_PARAMS, q: city}})
  }
}
