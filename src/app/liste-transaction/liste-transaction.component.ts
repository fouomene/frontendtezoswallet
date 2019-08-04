import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-liste-transaction',
  templateUrl: './liste-transaction.component.html',
  styleUrls: ['./liste-transaction.component.css']
})
export class ListeTransactionComponent implements OnInit {

  emailusers:string;
  transactions: Transaction[];

  constructor(private customerService : CustomerService, private router : Router, private walletService:WalletService) { }

  ngOnInit() {

    this.emailusers = this.customerService.getToken();
    console.log(this.emailusers);
 
    if (!this.customerService.isLogged()) {
      this.router.navigateByUrl('/login');
    } 


    this.walletService.transactionsAccount(this.emailusers).
     subscribe(reponseApi => {
         console.log(reponseApi);
         this.transactions = reponseApi;
         
     });


    /* Mock Transactions */
    /*this.transactions = [
      {
        pkhSource: 'tz1byEzc7Yx5fycvVM79WRR5gtjJBQpFJaD6',
        pkhDestination: 'tz1TANP8y62Gbb5d2CwC8PJAPNQJrSBcGLWh',
        amount: 250,
        fee: 10,
        dateTrans: '2019-07-15 10:15:30'
      },
      {
        pkhSource: 'tz1TANP8y62Gbb5d2CwC8PJAPNQJrSBcGLWh',
        pkhDestination: 'tz1byEzc7Yx5fycvVM79WRR5gtjJBQpFJaD6',
        amount: 2000,
        fee: 200,
        dateTrans: '2019-06-23 08:15:00'
      },
      {
        pkhSource: 'tz1byEzc7Yx5fycvVM79WRR5gtjJBQpFJaD6',
        pkhDestination: 'tz1TANP8y62Gbb5d2CwC8PJAPNQJrSBcGLWh',
        amount: 25000,
        fee: 152,
        dateTrans: '2019-08-01 04:00:30'
      },
      {
        pkhSource: 'tz1TANP8y62Gbb5d2CwC8PJAPNQJrSBcGLWh',
        pkhDestination: 'tz1byEzc7Yx5fycvVM79WRR5gtjJBQpFJaD6',
        amount: 250,
        fee: 10,
        dateTrans: '2019-08-03 06:15:30'
      },
    ];*/


  }



}
