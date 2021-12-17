import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editUserForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.editUserForm   = new FormGroup({
      'name': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'age': new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    console.log(this.editUserForm.value)
  }
}
