
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAllDaxComponent } from './components/show-all-dax/show-all-dax.component';

import { fakeBackendProvider } from './helpers/fakeBackend';

import { ConfirmEqualValidatorDirective } from './helpers/confirm-equal-validator.directive'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StockListComponent,
    AddStockComponent,
    StockDetailsComponent,
    RegisterComponent,
    HomeComponent,
    ShowAllDaxComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //ReactiveFormsModule
    FormsModule,
    // ConfirmEqualValidatorDirective
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
