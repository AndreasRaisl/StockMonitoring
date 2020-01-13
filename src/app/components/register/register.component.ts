import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }
  ngOnInit( ) {
  }

  userToRegister = new User('', '', '', '', '', '');

  onSubmit() {
    // console.log(this.userToRegister);
    this.authenticationService.registerUser(this.userToRegister).subscribe((data) => {
      console.log('Successfully posted user registration');
      console.log(data);
    });

  }

}
