import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  type!:string;
  questionsData!:[];
  questionsColumn!:[]
  constructor() { }

  ngOnInit(): void {
  }
  getDialogType(event:any){
    this.type = event
  }

}
