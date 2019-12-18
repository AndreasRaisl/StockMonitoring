import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockMonitoring';
  currentUser: string;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(currentUser => {
      this.currentUser = currentUser;
    });    
  }

  logout() {
    this.authenticationService.logout();
  }
}
