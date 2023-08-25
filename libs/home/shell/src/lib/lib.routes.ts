import { Route } from '@angular/router';

export const homeShellRoutes: Route[] = [
  {
    path: 'home-feature',
    loadChildren: () =>
      import('@agroloc/home/feature').then((m) => m.HomeFeatureModule),
  },
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];
