import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  type!:string;
  productsData!:[];
  productsColumn!:[]
  constructor() { }

  ngOnInit(): void {
  }
  getDialogType(event:any){
    this.type = event
  }

}
