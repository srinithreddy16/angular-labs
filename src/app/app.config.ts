import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './interceptors/auth-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { myStore } from './store/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, retryInterceptor, errorInterceptor])),
    provideStore(myStore),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
