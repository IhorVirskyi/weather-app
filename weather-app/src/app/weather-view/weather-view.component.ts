import { Component, Input } from '@angular/core';
import { WeatherInfo } from "../interfaces/weather";

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent {
  @Input() weatherInfo: WeatherInfo;
}
