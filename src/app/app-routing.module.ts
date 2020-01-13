
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAllDaxComponent } from './components/show-all-dax/show-all-dax.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'showall', component: StockListComponent},
  {path: 'stocks/:id', component: StockDetailsComponent},
  {path: 'add', component: AddStockComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'dax', component: ShowAllDaxComponent},
  {path: '**',  redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
