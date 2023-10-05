import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UserModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(UserModule)
  .catch(err => console.error(err));
