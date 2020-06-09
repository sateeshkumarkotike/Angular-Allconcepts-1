import { Person } from './person.model';

import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver,ComponentRef,ComponentFactory } from '@angular/core';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name = 200;

  public onePerson: Person = {
    age: 20,
    name: "sateesh"
  }

  public persons: Person[] = [
    { age: 20, name: "ELPISITSOLUTIONS" },
    { age: 20, name: "ELPISITSOLUTIONS" },
    { age: 20, name: "ELPISITSOLUTIONS" },
    { age: 20, name: "ELPISITSOLUTIONS" },
    { age: 20, name: "ELPISITSOLUTIONS" },
    { age: 20, name: "ELPISITSOLUTIONS" }
  ];

  public componentRef: any;

  @ViewChild('loadComponent', { static: true }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  data = [
    {
      "Id": 1,
      "Name": "Student Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ]

  selectName(id: number) {
    console.log(id)
    this.createComponent(id);
  }

  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(Dynamic1Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(Dynamic2Component);
      this.componentRef = this.entry.createComponent(factory);
    }
    this.componentRef.instance.message = "Called by appComponent";
  }

  loadComponent() {
    this.createComponent(1);
  }

}
