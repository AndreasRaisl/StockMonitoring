import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Stock } from '../models/stock';
import { throwError, Observable } from 'rxjs'; 
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  url: string = '../assets/data/stocklist.json'; 
  // url: string = 'http://localhost:3000/api/stocks'  //`https://my-json-server.typicode.com/AndreasRaisl/fakeDataServer/stocks/`;

  myStocks = [
    {id: 1, name: 'Volkswagen', wkn: 23578, price: 30},
    {id: 2, name: 'Allianz', wkn: 12345, price: 40},
    {id: 3, name: 'BASF', wkn: 567890, price: 80}      
  ];
  

  constructor(private httpClient: HttpClient) { }
  getAllStocks() {
  // getAllStocks() : Observable<Stock[]> {
  //     return this.httpClient.get<Stock[]>(`${this.url}`)
  //       .pipe(catchError(this.errorHandler));
    return this.myStocks;
  }
  
  errorHandler(error:  HttpErrorResponse) {
    return throwError(error.message);
  }

  deleteFromPortfolio(stockToDelete) {
    // Post request to server
    return true;

  }
}
