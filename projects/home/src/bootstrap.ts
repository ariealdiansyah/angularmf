import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HomeModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.error(err));
