import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/business/business.module').then(
        (m) => m.BusinessModule
      ),
  },

];
