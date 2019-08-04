import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emailusers:string;

  constructor(private customerService:CustomerService, private router:Router,) { }

  ngOnInit() {

    this.emailusers = this.customerService.getToken();
    console.log(this.emailusers);
 
    if (!this.customerService.isLogged()) {
      this.router.navigateByUrl('/login');
    } 
    
  }

}
