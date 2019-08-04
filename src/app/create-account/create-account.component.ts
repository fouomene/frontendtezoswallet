import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountForm: any;
  pswd: string;
  cpswd: string;
  message: string;
  constructor(
    fb: FormBuilder, private walletService : WalletService, private router: Router
  ) { 
    this.accountForm = fb.group({
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      confirmPassword : ''
    });
  }

  ngOnInit() {
  }

  onPasswordMatch(formData): boolean {
    let r: boolean;
    r = (formData.password === formData.confirmPassword) ? true : false;
    return r;
  }


  onSubmit(formData){
   // formData.nomprenom = formData.firstName + ' ' +  formData.lastName;
    console.log(formData);
    this.walletService.createAccound(formData).
    subscribe(reponseApi => {
        console.log(reponseApi);

        if (reponseApi.status==200){
          console.log(reponseApi.message);

          //this.router.navigateByUrl('/transfer', {skipLocationChange: true}).then(()=>
          //this.router.navigate(["/transfer"])); 
          window.alert('Account create !!');
          this.router.navigateByUrl('/login');
          //this.route.navigate(['']);
 
      } else{

          this.message = reponseApi.message;
      }
        
    });
  }

}
