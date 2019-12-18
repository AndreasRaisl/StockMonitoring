import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(private authenticationService: AuthenticationService, /*private formBuilder: FormBuilder */) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    //}
    // );
  }

  login(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    let username = event.target.querySelector('#username').value;
    let password = event.target.querySelector('#password').value;
    this.authenticationService.login(username, password);

  }

}
