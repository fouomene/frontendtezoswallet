import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuNavigationPrincipalComponent } from './menu-navigation-principal/menu-navigation-principal.component';
import { TransferValueComponent } from './transfer-value/transfer-value.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { ActiveWalletComponent } from './active-wallet/active-wallet.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MobileComponent } from './mobile/mobile.component';
import { BuyComponent } from './buy/buy.component';


const routes: Routes = [
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'login', component: LoginFormComponent },
                    { path: 'transfer', component: TransferValueComponent },
                    { path: 'create-account', component: CreateAccountComponent },
                    { path: 'list-transaction', component: ListeTransactionComponent },
                    { path: 'active-wallet', component: ActiveWalletComponent },
                    { path: 'balance', component: BalanceComponent },
                    { path: 'profile', component: ProfileComponent },
                    { path: 'mobile', component: MobileComponent },
                    { path: 'buy', component: BuyComponent },
                    { 
                      path: '',
                      redirectTo: '/login',
                      pathMatch: 'full'
                    },
                  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
