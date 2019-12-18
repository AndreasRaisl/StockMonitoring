import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'; HomeComponent



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'showall', component: StockListComponent},
  {path: 'stocks/:id', component: StockDetailsComponent},
  {path: 'add', component: AddStockComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: '**',  redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
