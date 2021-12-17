import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  open!:boolean;
  type!:string;
  categoriesData!:[];
  categoriesColumns!:[]
  // currencyColumns = Object.keys(this.currenciesData[0]);
  constructor() { }

  ngOnInit(): void {
    
  }
  getDialogType(event:any){
    this.type = event
  }

}
