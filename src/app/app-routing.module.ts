import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './modules/entry/entry/entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/entryPoint', pathMatch: 'full' },
  { path: 'entryPoint', component: EntryComponent },
  {
    path: 'entryPoint',
    loadChildren: () =>
      import('./modules/entry/entry.module').then(m => m.EntryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
