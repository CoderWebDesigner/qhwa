import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  open!:boolean;
  type!:string;
  currenciesData=[
    {id:1,name:'احمد',lastname:'رمزي',age:27},
    {id:2,name:'كريم',lastname:'محمد',age:28},
    {id:2,name:'حسن',lastname:'احمد',age:28},
    {id:3,name:'ahmed',lastname:'ramzy',age:27},
    {id:4,name:'ahmed',lastname:'ramzy',age:27},
    {id:5,name:'ahmed',lastname:'ramzy',age:27},
    {id:6,name:'ahmed',lastname:'ramzy',age:27},
    {id:7,name:'ahmed',lastname:'ramzy',age:27},
    {id:8,name:'ahmed',lastname:'ramzy',age:27},
    {id:9,name:'ahmed',lastname:'ramzy',age:27},
    {id:10,name:'ahmed',lastname:'ramzy',age:27},
    {id:11,name:'ahmed',lastname:'ramzy',age:27},
    {id:12,name:'ahmed',lastname:'ramzy',age:27},
    {id:13,name:'ahmed',lastname:'ramzy',age:27},
    {id:14,name:'ahmed',lastname:'ramzy',age:27},
    {id:15,name:'ahmed',lastname:'ramzy',age:27},
    {id:16,name:'ahmed',lastname:'ramzy',age:27},
    {id:17,name:'ahmed',lastname:'ramzy',age:27},
    {id:18,name:'ahmed',lastname:'ramzy',age:27},
    {id:19,name:'ahmed',lastname:'ramzy',age:27},
    {id:20,name:'ahmed',lastname:'ramzy',age:27},
    {id:21,name:'ahmed',lastname:'ramzy',age:27},
    {id:22,name:'ahmed',lastname:'ramzy',age:27},
    {id:23,name:'ahmed',lastname:'ramzy',age:27},
    {id:24,name:'ahmed',lastname:'ramzy',age:27},
    {id:25,name:'ahmed',lastname:'ramzy',age:27},
    {id:26,name:'ahmed',lastname:'ramzy',age:27},
    {id:27,name:'ahmed',lastname:'ramzy',age:27},
    {id:28,name:'ahmed',lastname:'ramzy',age:27},
    {id:29,name:'ahmed',lastname:'ramzy',age:27},
    {id:30,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
    {id:1,name:'ahmed',lastname:'ramzy',age:27},
  ];
  currencyColumns = Object.keys(this.currenciesData[0]);
  constructor() { }

  ngOnInit(): void {
    
  }
  getDialogType(event:any){
    this.type = event
  }

  
}
