import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OffersComponent } from './pages/offers/offers.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OffersComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OfferModule { }
