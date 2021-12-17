import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetPassword!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.forgetPassword = new FormGroup({
      'email':new FormControl('')
    })
  }
  onSubmit(){
    console.log(this.forgetPassword.value)
    
  }

}
