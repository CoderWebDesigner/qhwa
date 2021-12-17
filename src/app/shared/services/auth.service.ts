import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private _loginUrl="";
  login(user:any){
    return this.http.post(this._loginUrl,user)
  }
}
