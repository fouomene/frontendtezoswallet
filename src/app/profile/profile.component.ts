import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailusers:string;
  nom:string = '';
  constructor(private customerService:CustomerService, private router:Router, private walletService: WalletService) { }

  ngOnInit() {

    this.emailusers = this.customerService.getToken();
    console.log(this.emailusers);
 
    if (!this.customerService.isLogged()) {
      this.router.navigateByUrl('/login');
    } 


    this.walletService.profilAccount(this.emailusers).
     subscribe(reponseApi => {
         console.log(reponseApi);
         this.nom = reponseApi.nom_prenom;
     });

  }
}
