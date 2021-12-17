import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editCategoryForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.editCategoryForm   = new FormGroup({
      'name': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'age': new FormControl('',Validators.required),
    })
    this.editCategoryForm.patchValue({
      name: 'ahmed',
      lastname: 'ramzy',
      age:27
    });
  }
  onSubmit(){
    console.log(this.editCategoryForm.value)
  }

}
