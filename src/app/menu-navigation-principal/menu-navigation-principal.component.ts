import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { LocalStorage } from 'ngx-store';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-menu-navigation-principal',
  templateUrl: './menu-navigation-principal.component.html',
  styleUrls: ['./menu-navigation-principal.component.css']
})
export class MenuNavigationPrincipalComponent  implements OnInit {

   isRoute ;
   isLogin;
   route: string;
   @LocalStorage() pagecomponent: number ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver, private customerService: CustomerService ) {
  

  }


  ngOnInit() {


  }


}
