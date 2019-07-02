import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SampleDataClient, MySampleModel } from '@app/api/app.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: MySampleModel[] | undefined;
  isLoading = false;

  constructor(private sampleDataClient: SampleDataClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.sampleDataClient
      .getSomeData()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: MySampleModel[]) => {
        console.log(data);
        this.data = data;
      });
  }
}
