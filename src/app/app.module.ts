import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule } from  '@angular/material';
import { MenuNavigationPrincipalComponent } from './menu-navigation-principal/menu-navigation-principal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginFormComponent } from './login-form/login-form.component';
import { TransferValueComponent } from './transfer-value/transfer-value.component';
import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { WalletService } from './wallet.service';
import { WebStorageModule } from 'ngx-store';
import { FooterpartComponent } from './footerpart/footerpart.component';
import { ActiveWalletComponent } from './active-wallet/active-wallet.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MobileComponent } from './mobile/mobile.component';
import { BuyComponent } from './buy/buy.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavigationPrincipalComponent,
    LoginFormComponent,
    TransferValueComponent,
    ListeTransactionComponent,
    CreateAccountComponent,
    FooterpartComponent,
    ActiveWalletComponent,
    BalanceComponent,
    DashboardComponent,
    ProfileComponent,
    MobileComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    ReactiveFormsModule,
    WebStorageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
