import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "clock",
    loadComponent: () => import('./clock/clock.component')
    .then(component => component.ClockComponent)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module')
    .then(module => module.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
