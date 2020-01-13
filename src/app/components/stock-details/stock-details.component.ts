import { StockService } from './../../services/stock.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Stock} from '../../models/stock';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
  inputs: ['selectedStock']  
})
export class StockDetailsComponent implements OnInit {
  stocklist: Stock[]= [];
  stock: Stock;
  selectedStock: Stock;
  currency: string = 'EUR';
  id: number;  

  @Output() goBackEvent = new EventEmitter();

  constructor(private route: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    this. stockService.getAllStocks().subscribe(data => this.stocklist = data);
    // this.stocklist = this.stockService.getAllStocks();
    console.log(this.stocklist);
    this.route.paramMap.subscribe(data => {
      let index =  parseInt(data.get('id'));
      this.stock = this.stocklist[index];
      this.id = index;
   });
  }

  showDetails(stock) {
    this.selectedStock = stock;
  }

  goBackToList() {
    this.goBackEvent.emit('dummyString');
    console.log('GoBackToList is called');
  }

}
