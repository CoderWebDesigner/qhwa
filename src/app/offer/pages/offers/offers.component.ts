import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  open!:boolean;
  type!:string;
  offersData!:[];
  offersColumn!:[]
  // offersColumns = Object.keys(this.offersData[0]);
  constructor() { }

  ngOnInit(): void {
    
  }
  getDialogType(event:any){
    this.type = event
  }

}
