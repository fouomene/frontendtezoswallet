import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { ReponseApi } from '../domaine/model.reponseapi';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-active-wallet',
  templateUrl: './active-wallet.component.html',
  styleUrls: ['./active-wallet.component.css']
})
export class ActiveWalletComponent implements OnInit {

  alphfaucetaccount: any;
  accountForm: any;
  message: string;

  emailusers:string;
  reponseApi : ReponseApi;
  messagekey : any;

  constructor(fb: FormBuilder, private walletService : WalletService, private router: Router, private customerService: CustomerService) { 

    this.accountForm = fb.group({
      emailusers : '',
      alphfaucetaccount : ''
    });

  }

  ngOnInit() {

    this.emailusers = this.customerService.getToken();
    console.log(this.emailusers);
 
    if (!this.customerService.isLogged()) {
      this.router.navigateByUrl('/login');
    } 
  }


  onSubmit(formData){
     formData.alphfaucetaccount = JSON.stringify(this.alphfaucetaccount, null, 2);

     
     console.log(formData);
     this.walletService.saveAlphabetAccound(formData).
     subscribe(reponseApi => {
         console.log(reponseApi);
 
         if (reponseApi.status==200){
           console.log(reponseApi.message);
           this.message = reponseApi.message;
           window.alert('Save  AlphabetAccound !!');
  
       } else{
 
           this.message = reponseApi.message;
       }
         
     });
   }
   
   getPublicPrivateKey(){

    console.log(this.emailusers);
    this.walletService.genarateKeystone(this.emailusers).
     subscribe(reponseApi => {
         console.log(reponseApi);
         this.messagekey = reponseApi;
         
     });
  
   }

   activeAccount(){
    console.log(this.emailusers);

    window.alert('Account  Initialize!!');

    this.walletService.activeAccount(this.emailusers).
     subscribe(reponseApi => {
         console.log(reponseApi);
         
         
     });
  
   }

}
