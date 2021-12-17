import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  userProfile!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userProfile   = new FormGroup({
      'name': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'age': new FormControl('',Validators.required),
    })
    this.userProfile.patchValue({
      name: 'ahmed',
      lastname: 'ramzy',
      age:27
    });
  }

  onSubmit(){
    console.log(this.userProfile.value)
  }

}
