import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, concat, filter, map, Observable, of, switchMap} from "rxjs";
import {RemoteData, RemoteStatus} from "./interfaces/remote-data";
import {WeatherInfo} from "./interfaces/weather";
import {WeatherService} from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedCity: string;

  cities = ["Kyiv", "Donetsk", "Lviv"];

  data$: Observable<RemoteData<WeatherInfo>>;

  private cityChange$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.data$ = this.cityChange$.pipe(
      filter(city => !!city),
      switchMap(city =>
        concat(
          of({status: RemoteStatus.LOADING}),
          this.weatherService.getWeather$(city)
            .pipe(
              map(value => ({status: RemoteStatus.LOADED, value}))
            )
        ))
    );
  }

  onCityChange(): void {
    this.cityChange$.next(this.selectedCity);
  }

}
