import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  fromGroup:FormGroup ;

  constructor(private fromBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.fromGroup = this.fromBuilder.group({
        userName:[,[Validators.required,Validators.minLength(4)]],
        userEmail:[,[Validators]],
        UserAddress:[],
        Address:this.fromBuilder.group({
          Address1:[],
          Address2:[]
        })
    });
  }

}
