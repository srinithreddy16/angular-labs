import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) //bootstraping(which component to load, which configuration to load)
  .catch((err) => console.error(err));
