import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';


const routes: Routes = [
  // {path:'auth',loadChildren:()=>import('./auth/auth.module').then(module=>module.AuthModule)},
  // {path:'users',loadChildren:()=>import('./user/user.module').then(module=>module.UserModule)},
  // {path:'',redirectTo:'auth',pathMatch:'full'}
  {path:'',loadChildren:()=>import('./auth/auth.module').then(module=>module.AuthModule)},
  {path:'',component:LayoutComponent,children:[
    {path:'users',loadChildren:()=>import('./user/user.module').then(module=>module.UserModule)},
  ]},
  {path:'',component:LayoutComponent,children:[
    {path:'categories',loadChildren:()=>import('./category/category.module').then(module=>module.CategoryModule)},
  ]},
  {path:'',component:LayoutComponent,children:[
    {path:'products',loadChildren:()=>import('./product/product.module').then(module=>module.ProductModule)},
  ]},
  {path:'',component:LayoutComponent,children:[
    {path:'offers',loadChildren:()=>import('./offer/offer.module').then(module=>module.OfferModule)},
  ]},
  {path:'',component:LayoutComponent,children:[
    {path:'orders',loadChildren:()=>import('./order/order.module').then(module=>module.OrderModule)},
  ]},
  {path:'',component:LayoutComponent,children:[
    {path:'currencies',loadChildren:()=>import('./currency/currency.module').then(module=>module.CurrencyModule)},
  ]},
  {path:'',component:LayoutComponent,children:[
    {path:'questions',loadChildren:()=>import('./question/question.module').then(module=>module.QuestionModule)},
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
