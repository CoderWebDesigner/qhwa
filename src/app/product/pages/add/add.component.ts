import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addProductForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addProductForm   = new FormGroup({
      'name': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'age': new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    console.log(this.addProductForm.value)
  }

}
