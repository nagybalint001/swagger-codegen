import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiException } from '../../api/app.generated';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    if (error instanceof ApiException) {
      // custom error model
      const dto = JSON.parse(error.response);

      if (error.status >= 400 && error.status < 500) {
        console.log('validation error', dto);
      } else if (error.status >= 500) {
        console.log('server side error', dto);
      }
    } else if (!environment.production) {
      console.error(error);
    }
  }
}
