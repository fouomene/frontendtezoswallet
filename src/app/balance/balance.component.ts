import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  
  emailusers:string;
  pkh:string = '';
  balance : number = 0;
  constructor(private customerService:CustomerService, private router:Router, private walletService: WalletService) { }

  ngOnInit() {

    this.emailusers = this.customerService.getToken();
    console.log(this.emailusers);
 
    if (!this.customerService.isLogged()) {
      this.router.navigateByUrl('/login');
    } 


    this.walletService.balanceAccount(this.emailusers).
     subscribe(reponseApi => {
         console.log(reponseApi);
         this.balance = reponseApi[0].balance;
         this.pkh = reponseApi[0].account_id;
         
     });

  }

}
