import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  openMobileMenu:boolean=false;
  routes=[
    {path:'users/dashboard',text:'الرئيسية',icon:'fas fa-home'},
    {path:'categories',text:'الاقسام',icon:'fas fa-th-large'},
    {path:'products',text:'المنتجات',icon:'fas fa-box-open'},
    {path:'orders',text:'الطلبات',icon:'fas fa-clipboard'},
    {path:'offers',text:'العروض',icon:'fas fa-percent'},
    {path:'currencies',text:'العملة',icon:'fas fa-coins'},
    {path:'questions',text:'الاسئله الشائعه',icon:'fas fa-question'},
    {path:'users',text:'المستخدمين',icon:'fas fa-user'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleMobileMenu(){
    this.openMobileMenu = !this.openMobileMenu
  }

}
