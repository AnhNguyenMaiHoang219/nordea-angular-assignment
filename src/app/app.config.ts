import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';

import { routes } from './app.routes';

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#8514f5',
  },
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: NZ_CONFIG, useValue: ngZorroConfig }],
};
