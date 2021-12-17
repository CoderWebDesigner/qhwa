import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'info',component:UserinfoComponent},
  {path:'',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
