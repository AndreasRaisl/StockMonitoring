import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import {Stock} from '../../models/stock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stocklist: Stock[]= [];
  stock: Stock;
  currency: string = 'EUR';
  id: number;  

  constructor(private route: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    this. stockService.getAllStocks().subscribe(data => this.stocklist = data);
    console.log(this.stocklist);
    this.route.paramMap.subscribe(data => {
      let index =  parseInt(data.get('id'));
      this.stock = this.stocklist[index];
      this.id = index;
   });
  }

}
