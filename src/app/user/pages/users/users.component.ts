import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  type!:string;
  usersData!:[];
  usersColumn!:[]
  constructor() { }

  ngOnInit(): void {
  }
  getDialogType(event:any){
    this.type = event
  }
}
