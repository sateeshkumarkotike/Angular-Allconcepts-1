import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { SamsungComponent } from './products/samsung/samsung.component';
import { IosComponent } from './products/ios/ios.component';
import { AppleComponent } from './products/apple/apple.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'' ,redirectTo:'home' ,pathMatch:'full'} ,
  { path:'home' ,component:HomeComponent } ,
  { path:'products' ,component:ProductsComponent ,children:[
    { path:'' ,redirectTo:'apple' ,pathMatch:'full'},
    { path:'apple' ,component:AppleComponent } ,
    { path:'ios' ,component:IosComponent} ,
    { path:'samsung' ,component:SamsungComponent },
    { path:'**' ,redirectTo:'home' ,pathMatch:'full'}
  ] } ,
  { path:'template-forms' ,component:TemplateFormsComponent } ,
  { path:'reactive-forms' ,component:ReactiveFormsComponent } ,
  { path:'service' ,component:ServiceComponent } ,
  { path:'contact' ,component:ContactComponent} ,
  { path:'**' ,redirectTo:'home' ,pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
