import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgPath="assets/images/elpisimg/elpis_logo-1068x260.png";

  public title = 'Simple Pagination in Angular 8';

  p: number = 1;
   collection = [
		{'name': 'Smith','address': 'Australia','skills': 'PHP' },
		{'name':'William', 'address':'England','skills': 'Java' },
		{'name':'Andy', 'address':'Africa','skills': 'Perl' },
		{'name':'Jhon', 'address':'Africa','skills': 'JavaScript' },
		{'name':'Flower', 'address':'Brazil','skills': 'Angular' },
		{'name':'Grant', 'address':'India','skills': 'JavaScript' },
		{'name':'Root', 'address':'Sri Lanka','skills': 'PHP' },
		{'name':'Joy', 'address':'Canada','skills': 'NodeJS' },
		{'name':'Samson', 'address':'India','skills': 'JavaScript' },
		{'name':'Sanju', 'address':'India','skills': 'PHP' },
		{'name':'Rocky', 'address':'America','skills': 'PHP' },
		{'name':'Monty', 'address':'England','skills': 'Angular' },
		{'name':'Peter', 'address':'England','skills': 'JavaScript' },
		{'name':'Fleming', 'address':'Newziland','skills': 'PHP' },
		{'name':'Astle', 'address':'England','skills': 'Angular' },
		{'name':'Chris', 'address':'France','skills': 'JavaScript' },
        {'name':'Butler', 'address':'England','skills': 'PHP' },
        {'name': 'Smith','address': 'Australia','skills': 'PHP' },
		{'name':'William', 'address':'England','skills': 'Java' },
		{'name':'Andy', 'address':'Africa','skills': 'Perl' },
		{'name':'Jhon', 'address':'Africa','skills': 'JavaScript' },
		{'name':'Flower', 'address':'Brazil','skills': 'Angular' },
		{'name':'Grant', 'address':'India','skills': 'JavaScript' },
		{'name':'Root', 'address':'Sri Lanka','skills': 'PHP' },
		{'name':'Joy', 'address':'Canada','skills': 'NodeJS' },
		{'name':'Samson', 'address':'India','skills': 'JavaScript' },
		{'name':'Sanju', 'address':'India','skills': 'PHP' },
		{'name':'Rocky', 'address':'America','skills': 'PHP' },
		{'name':'Monty', 'address':'England','skills': 'Angular' },
		{'name':'Peter', 'address':'England','skills': 'JavaScript' },
		{'name':'Fleming', 'address':'Newziland','skills': 'PHP' },
		{'name':'Astle', 'address':'England','skills': 'Angular' },
		{'name':'Chris', 'address':'France','skills': 'JavaScript' },
        {'name':'Butler', 'address':'England','skills': 'PHP' },
        {'name': 'Smith','address': 'Australia','skills': 'PHP' },
		{'name':'William', 'address':'England','skills': 'Java' },
		{'name':'Andy', 'address':'Africa','skills': 'Perl' },
		{'name':'Jhon', 'address':'Africa','skills': 'JavaScript' },
		{'name':'Flower', 'address':'Brazil','skills': 'Angular' },
		{'name':'Grant', 'address':'India','skills': 'JavaScript' },
		{'name':'Root', 'address':'Sri Lanka','skills': 'PHP' },
		{'name':'Joy', 'address':'Canada','skills': 'NodeJS' },
		{'name':'Samson', 'address':'India','skills': 'JavaScript' },
		{'name':'Sanju', 'address':'India','skills': 'PHP' },
		{'name':'Rocky', 'address':'America','skills': 'PHP' },
		{'name':'Monty', 'address':'England','skills': 'Angular' },
		{'name':'Peter', 'address':'England','skills': 'JavaScript' },
		{'name':'Fleming', 'address':'Newziland','skills': 'PHP' },
		{'name':'Astle', 'address':'England','skills': 'Angular' },
		{'name':'Chris', 'address':'France','skills': 'JavaScript' },
        {'name':'Butler', 'address':'England','skills': 'PHP' },
        {'name': 'Smith','address': 'Australia','skills': 'PHP' },
		{'name':'William', 'address':'England','skills': 'Java' },
		{'name':'Andy', 'address':'Africa','skills': 'Perl' },
		{'name':'Jhon', 'address':'Africa','skills': 'JavaScript' },
		{'name':'Flower', 'address':'Brazil','skills': 'Angular' },
		{'name':'Grant', 'address':'India','skills': 'JavaScript' },
		{'name':'Root', 'address':'Sri Lanka','skills': 'PHP' },
		{'name':'Joy', 'address':'Canada','skills': 'NodeJS' },
		{'name':'Samson', 'address':'India','skills': 'JavaScript' },
		{'name':'Sanju', 'address':'India','skills': 'PHP' },
		{'name':'Rocky', 'address':'America','skills': 'PHP' },
		{'name':'Monty', 'address':'England','skills': 'Angular' },
		{'name':'Peter', 'address':'England','skills': 'JavaScript' },
		{'name':'Fleming', 'address':'Newziland','skills': 'PHP' },
		{'name':'Astle', 'address':'England','skills': 'Angular' },
		{'name':'Chris', 'address':'France','skills': 'JavaScript' },
        {'name':'Butler', 'address':'England','skills': 'PHP' },
        {'name': 'Smith','address': 'Australia','skills': 'PHP' },
		{'name':'William', 'address':'England','skills': 'Java' },
		{'name':'Andy', 'address':'Africa','skills': 'Perl' },
		{'name':'Jhon', 'address':'Africa','skills': 'JavaScript' },
		{'name':'Flower', 'address':'Brazil','skills': 'Angular' },
		{'name':'Grant', 'address':'India','skills': 'JavaScript' },
		{'name':'Root', 'address':'Sri Lanka','skills': 'PHP' },
		{'name':'Joy', 'address':'Canada','skills': 'NodeJS' },
		{'name':'Samson', 'address':'India','skills': 'JavaScript' },
		{'name':'Sanju', 'address':'India','skills': 'PHP' },
		{'name':'Rocky', 'address':'America','skills': 'PHP' },
		{'name':'Monty', 'address':'England','skills': 'Angular' },
		{'name':'Peter', 'address':'England','skills': 'JavaScript' },
		{'name':'Fleming', 'address':'Newziland','skills': 'PHP' },
		{'name':'Astle', 'address':'England','skills': 'Angular' },
		{'name':'Chris', 'address':'France','skills': 'JavaScript' },
		{'name':'Butler', 'address':'England','skills': 'PHP' }
  ];
  
  constructor(private router:Router) { 

  }

  ngOnInit() {
    
  }

  navigation(){
    this.router.navigate(['service'])
  }

}
