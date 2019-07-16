import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import { CredentialsService } from './authentication/credentials.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { GlobalErrorHandler } from './interceptors/global-error-handler';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    AuthenticationService,
    CredentialsService,
    AuthenticationGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
