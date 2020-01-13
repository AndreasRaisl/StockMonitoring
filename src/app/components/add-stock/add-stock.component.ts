import { StockService } from './../../services/stock.service';
import { Stock } from './../../models/stock';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor(private stockService: StockService ) { }

  ngOnInit() {
  }

   daxStocks = ['Adidas', 'Allianz', 'BASF', 'Bayer', 'Beiersdorf', 'BMW', 'Continental', 'Covestro', 'Daimler', 'Deutsche Bank', 'Deutsche Börse',              'Deutsche Post', 'Deutsche Telekom', 'E.ON', 'Fresenius', 'Fresenius Medical Care', 'HeidelbergCement', 'Henkel', 'Infineon',                    'Linde', 'Lufthansa', 'Merck', 'MTU Aero Engines', 'Munich Re', 'RWE', 'SAP', 'Siemens', 'Volkswagen', 'Vonovia', 'Wirecard'];

   stockToAdd = new Stock('', '', '', '', '', '', '', '');
   showSuccessMessage = false;

   onSubmit() {
     console.log('On Submit stockToAdd is: ' + this.stockToAdd.name);
     console.log('On Submit stockToAdd is: ' + this.stockToAdd.selectedStock);
     this.stockService.addStock(this.stockToAdd)
      .subscribe(responseData => {
        console.log(responseData);
        // router redirect to stockList or stockDetail component
        window.alert("Aktie erfolgreich zu Ihrem Depot hinzugefügt");
        this.showSuccessMessage = true;
      } );     
   }
     

}
