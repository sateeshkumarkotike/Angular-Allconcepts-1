
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { AppleComponent } from './products/apple/apple.component';
import { SamsungComponent } from './products/samsung/samsung.component';
import { IosComponent } from './products/ios/ios.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServiceComponent,
    ContactComponent,
    AppleComponent,
    SamsungComponent,
    IosComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    Dynamic1Component,
    Dynamic2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule ,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ Dynamic1Component,Dynamic2Component ]
})

export class AppModule { 

}
