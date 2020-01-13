import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../models/user';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  user;

  // urlForLogin: string = 'http://localhost:3000/users/authenticate';
  // urlForRegister: string = 'http://localhost:3000/users/register';

  urlForLogin: string = 'https://stockmonitoring-server.herokuapp.com/users/authenticate';
  urlForRegister: string = 'https://stockmonitoring-server.herokuapp.com/users/register';


  constructor(private httpClient: HttpClient, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  login(username, password) {
    return this.httpClient.post<any>(`${this.urlForLogin}`, {username: username, password: password});     
         //localStorage.setItem('access_token', data.token);
  }

      // .pipe(map(user => {

      // }))
  

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  registerUser(user: User): Observable<any> {
    return this.httpClient.post<any>(this.urlForRegister, user).pipe(
      catchError(this.handleError)
  );
  }

  handleError(error: HttpErrorResponse) {
    let message ="Error during Http Post request for registering user";
    console.log(message);
    return throwError(message);
  }
}
