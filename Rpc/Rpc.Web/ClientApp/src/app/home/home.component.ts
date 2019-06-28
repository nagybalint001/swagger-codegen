import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SampleDataClient, WeatherForecast } from '@app/api/app.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: WeatherForecast[] | undefined;
  isLoading = false;

  constructor(private sampleDataClient: SampleDataClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.sampleDataClient
      .weatherForecasts()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: WeatherForecast[]) => {
        console.log(data);
        this.data = data;
      });
  }
}
