import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'UserName':new FormControl(''),
      'Password':new FormControl('')
    })
  }
  onSubmit(){
    console.log(this.loginForm.value)
    this.router.navigate(['/users/dashboard'])
    // this.authService.login(this.loginForm.value).subscribe((result)=>{
    //   console.log(result)
    // })
  }
}
