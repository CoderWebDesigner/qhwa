
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
  // display: boolean = false;
  // setDisplay(value:boolean){
  //   this.display =value
  // }
  // getDisplay(){
  //   return this.display
  // }
  save(data:any){
    console.log(data)
  }
  // constructor() { }
}
