import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './pages/Dashboard/dashboard.component';
import { ProductionComponent } from './pages/production/production.component';
import { DowntimeComponent } from './pages/downtime/downtime.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';


const routes: Routes = [
  {
    path: '',
    // component: MainpageComponent,

    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',

  }, {
    path: 'mainpage',
    component: MainpageComponent,


    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'production',
        component: ProductionComponent
      },
      { path: 'downtime', component: DowntimeComponent },
      {
        path: 'maintenance', component: MaintenanceComponent
      }




    ]
  },
  // {
  //   path: 'mainpage/production',
  //   component: ProductionComponent
  // },

  // {
  //   path: '**',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
