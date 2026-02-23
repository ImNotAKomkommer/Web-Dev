import 'zone.js';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app/app.component';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, appConfig, context);
}