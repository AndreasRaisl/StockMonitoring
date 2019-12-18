import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocklist: Stock[] = [];
  errorMsg: string;
  
  constructor(private stockService: StockService) { }  

  ngOnInit() {
    // this.stocklist = this.stockService.getAllStocks();
    this.refreshStocklist();  
  }

  refreshStocklist() {
    // this.stockService.getAllStocks().subscribe(data => { this.stocklist = data; },
    //   error => { this.errorMsg = error }
    //   );
    this.stocklist = this.stockService.getAllStocks();
    console.log(this.stocklist);    
  }

  deleteStock(stockToDelete) {
    this.stockService.deleteFromPortfolio(stockToDelete);
    this.stocklist = this.stocklist.filter(item => item !== stockToDelete);
  }  

  checkOnline(stock) {
    console.log("CheckOnline is called");
  }

}


