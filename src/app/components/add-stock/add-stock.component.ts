import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   daxStocks = ['Adidas', 'Allianz', 'BASF', 'Bayer', 'Beiersdorf', 'BMW', 'Continental', 'Covestro', 'Daimler', 'Deutsche Bank', 'Deutsche Börse',              'Deutsche Post', 'Deutsche Telekom'];
     

}
