import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  user;

  url: string = 'http://localhost:3000/users/authenticate';

  constructor(private httpClient: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

  login(username, password) {
    return this.httpClient.post(`${this.url}`, {username: username, password: password})
      .subscribe(data => console.log('This is the data from the server:', data));

      // .pipe(map(user => {

      // }))
  }

  logout() {
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
