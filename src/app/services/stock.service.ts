import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Stock } from '../models/stock';
import { throwError, Observable } from 'rxjs'; 
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  // url: string = '../assets/data/stocklist.json'; //`https://my-json-server.typicode.com/AndreasRaisl/fakeDataServer/stocks/`;
  // urlGetStocklist: string = 'http://localhost:3000/api/stocks';  
  // urlPostAddStock: string = 'http://localhost:3000/api/add-stock';
  // urlUpdatePrice: string = 'http://localhost:3000/api/update-price';
  // urlDeleteStock: string = 'http://localhost:3000/api/delete-stock/';

  urlGetStocklist: string = 'https://stockmonitoring-server.herokuapp.com/api/stocks';  
  urlPostAddStock: string = 'https://stockmonitoring-server.herokuapp.com/api/add-stock';
  urlUpdatePrice: string = 'https://stockmonitoring-server.herokuapp.com/api/update-price';
  urlDeleteStock: string = 'https://stockmonitoring-server.herokuapp.com/api/delete-stock/';




  // myDummyStocks = [
  //   {id: 1, name: 'Volkswagen', wkn: 23578, price: 30},
  //   {id: 2, name: 'Allianz', wkn: 12345, price: 40},
  //   {id: 3, name: 'BASF', wkn: 567890, price: 80}      
  // ];
  

  constructor(private httpClient: HttpClient) { }
  
  getAllStocks() : Observable<Stock[]> {
      return this.httpClient.get<Stock[]>(`${this.urlGetStocklist}`)
        .pipe(catchError(this.errorHandler));
    // return this.myStocks;
  }

  // getDummyStocks() {
  //   return this.myDummyStocks;
  // }

  addStock(stock: Stock) {
    return this.httpClient.post<any>(this.urlPostAddStock, stock);
  }

  updatePrice(stock: Stock) {
    console.log('The ID is : ' + stock.name);
    return this.httpClient.put<any>(`${this.urlUpdatePrice}`, stock);
  }

  errorHandler(error:  HttpErrorResponse) {
    return throwError(error.message);
  }

  deleteFromPortfolio(stockToDelete) {
    console.log('Stock to delete: ' + stockToDelete._id);
    return this.httpClient.delete<any>(`${this.urlDeleteStock}${stockToDelete._id}`); 
  }
}
