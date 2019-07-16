import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  private errorHandler(error: HttpEvent<any>): Observable<any> {
    // basic error handling
    // it could be moved to GlobalErrorHandler

    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.router.navigateByUrl('/login');
      } else if (error.status === 403) {
        this.router.navigateByUrl('/');
      }
    }

    return throwError(error);
  }
}
