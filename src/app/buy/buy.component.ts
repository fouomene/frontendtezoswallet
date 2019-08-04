import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  emailusers:string;
  amonttezo : number = 0;
  amontcfa : number = 0;
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit() {

    this.emailusers = this.customerService.getToken();
    console.log(this.emailusers);
 
    if (!this.customerService.isLogged()) {
      this.router.navigateByUrl('/login');
    } 

  }

  somethingChanged(){

  this.amontcfa = this.amonttezo / 772;
  }

}
