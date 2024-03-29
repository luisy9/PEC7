import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppRoutingModule } from './app.routing.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { atricleAppInterceptor } from './interpectors/atricle-app.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([atricleAppInterceptor]))]
};
