import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  display!:boolean;
  @Input() title!:string;
  constructor(private dialogService:DialogService) { }
  

  ngOnInit(): void {
    this.dialogService.currentMessage.subscribe(result=>{
      this.display = result
    })
  }

  hideDialog(){
     this.display = false;
     console.log(this.display)
  }
  showDialog(){
    this.display = true
  }
  checkDisplay(){
    
    return this.display
  }
  onSave(){

  }
}
