import { Component, OnInit } from '@angular/core';

// Le service de gestion de formulaire
import { FormBuilder } from '@angular/forms'; 
import { LocalStorage } from 'ngx-store';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { WalletService } from '../wallet.service';
import { ReponseApi } from '../domaine/model.reponseapi';

@Component({
  selector: 'app-transfer-value',
  templateUrl: './transfer-value.component.html',
  styleUrls: ['./transfer-value.component.css']
})
export class TransferValueComponent implements OnInit {

  // Initialisation du formGroup
  transferForm: any;
  @LocalStorage() pagecomponent: number ;

  emailusers:string;
  reponseApi : ReponseApi;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router, private customerService: CustomerService, private walletService: WalletService
  ) { 
    this.transferForm = formBuilder.group({
      emailusers: '',
      pkhdestination: '',
      amount: '',
      fee: ''
    });

    
  }

  ngOnInit() {

    
   console.log(this.pagecomponent);
   this.emailusers = this.customerService.getToken();
   console.log(this.emailusers);

   if (!this.customerService.isLogged()) {
     this.router.navigateByUrl('/login');
   } 

  }


  onSubmit(transferData) {
    // Process checkout data here
    
    this.walletService.sendtezos(transferData).
    subscribe(reponseApi => {
        console.log(reponseApi);
        this.reponseApi = reponseApi;
        this.transferForm = this.formBuilder.group({
          emailusers: '',
          pkhdestination: '',
          amount: '',
          fee: ''
        });
        
    });


  }

}
