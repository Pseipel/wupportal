import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const AdminProviders = [
];

const AdminResolvers = {
};

const AdminRoutes = [
  {
    path: '',
    resolve: AdminResolvers,
    component: AdminComponent,
    children: []
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(AdminRoutes)],
  providers: AdminProviders
})

export class AdminRouter { }
