import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrenciesComponent } from './pages/currencies/currencies.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './pages/edit/edit.component';
import { AddComponent } from './pages/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrenciesComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CurrencyModule { }
