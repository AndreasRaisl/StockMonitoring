import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocklist: Stock[];
  errorMsg: string;
  selectedStockForDetails: Stock;
  detailsView: boolean = false;
  
  constructor(private stockService: StockService) { }  

  ngOnInit() {
    // this.stocklist = this.stockService.getAllStocks();
    this.refreshStocklist();  
  }

  refreshStocklist() {
    this.stockService.getAllStocks().subscribe(data => { this.stocklist = data; },
      error => { this.errorMsg = error }
      );
    // this.stocklist = this.stockService.getDummyStocks();
    console.log(this.stocklist);    
  }

  showDetails(stock: Stock) {   
    this.selectedStockForDetails = stock;
    this.detailsView = true;
    console.log('Show Details was clicked: ' + this.selectedStockForDetails);
  }

  updatePrice(stock: Stock, id: number) {
    this.stockService.updatePrice(stock).subscribe(updatedStock => {     
    this.stocklist[id] = updatedStock;

    });
  }

  deleteStock(stockToDelete: any) {
    this.stockService.deleteFromPortfolio(stockToDelete)
      .subscribe((response) => {
        console.log(response);
      });
    this.stocklist = this.stocklist.filter(item => item !== stockToDelete);
  }  

  checkOnline(stock) {
    console.log("CheckOnline is called");
  }

  onGoBackEvent(dummyString) {
    console.log('Event is raised');
    this.detailsView = false;
  }

}


