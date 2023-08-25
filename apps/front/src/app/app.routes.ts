import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home-shell',
    loadChildren: () =>
      import('@agroloc/home/shell').then((m) => m.HomeShellModule),
  },
];
