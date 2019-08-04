import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';
import { ReponseApi } from '../domaine/model.reponseapi';

import { LocalStorage } from 'ngx-store';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @LocalStorage() pagecomponent: number = 0;
  loginForm: any;
  message : string;

  constructor(
    formBuilder: FormBuilder, private walletService:WalletService,
    private router : Router, private customer: CustomerService
    ) { 
      customer.clear();
      //J'initialise le formGroup
      this.loginForm = formBuilder.group({
        email: '',
        password: ''
      });
    }

  ngOnInit() {
      this.message=" ";
      this.pagecomponent = 0;

  }

  onSubmit(loginData) {
    // Process checkout data 
    //alert("Email: "+loginData.email + " Password: "+loginData.password);

    this.walletService.authentification(loginData).
    subscribe(reponseApi => {
        console.log(reponseApi);
        if (reponseApi.status==200){
            this.pagecomponent=1;
            this.customer.setToken(loginData.email);
            console.log(reponseApi.message);

            //this.router.navigateByUrl('/transfer', {skipLocationChange: true}).then(()=>
            //this.router.navigate(["/transfer"])); 
            console.log(this.pagecomponent);
            this.router.navigateByUrl('/dashboard');
            //this.route.navigate(['']);
           

        } else{

            this.message = reponseApi.message;
        }
    });

  }

}
