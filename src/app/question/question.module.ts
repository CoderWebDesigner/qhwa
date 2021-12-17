import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionsComponent } from './pages/questions/questions.component';
import { EditComponent } from './pages/edit/edit.component';
import { AddComponent } from './pages/add/add.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestionsComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }
