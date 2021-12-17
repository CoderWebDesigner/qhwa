import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addOfferForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addOfferForm   = new FormGroup({
      'name': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'age': new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    console.log(this.addOfferForm.value)
  }

}
