import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';


@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    UserinfoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgChartsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
