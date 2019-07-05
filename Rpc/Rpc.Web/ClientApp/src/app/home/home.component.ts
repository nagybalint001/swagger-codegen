import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { saveAs } from 'file-saver';

import { SampleDataClient, MySampleModel } from '@app/api/app.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: MySampleModel[] | undefined;
  isLoading = false;

  file: File;

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

  upload() {
    if (!this.file) {
      return;
    }

    this.sampleDataClient.upload({ data: this.file, fileName: this.file.name }).subscribe(console.log);
  }

  onFileChange(event: any) {
    console.log(event);
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  download() {
    this.sampleDataClient.save().subscribe(x => saveAs(x.data, x.fileName));
  }
}
