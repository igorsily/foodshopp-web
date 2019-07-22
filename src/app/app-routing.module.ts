import { Routes } from '@angular/router';

import { AdminComponent } from './layouts/admin/admin.component';

export const Approutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'starter',
        loadChildren: () => import('./pages/starter/starter.module').then(m => m.StarterModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
