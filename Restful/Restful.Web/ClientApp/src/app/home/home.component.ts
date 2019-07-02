import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SampleClient, MySampleModel } from '@app/api/app.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: MySampleModel[] | undefined;
  isLoading = false;

  constructor(private sampleClient: SampleClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.sampleClient
      .getAll()
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
