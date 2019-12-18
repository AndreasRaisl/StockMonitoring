import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
//import { url } from 'inspector';
import { mergeMap, delay, materialize, dematerialize } from 'rxjs/operators';

let users = [{id: 1, username: 'Andy', password: 'geheim'}];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
   intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    return of (null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  

  function handleRoute() {
    switch(true) {
      case url.endsWith('users/authenticate') && method==='POST':
        return authenticate();
      default:
        return next.handle(request);
    }
  }

  function authenticate() {
    const {username, password} = body;
    let presentUser = users.find(x => x.username === username && x.password === password);
    if(!presentUser) return error("Username or Password is incorrect");
    else return ok({username: presentUser.username});
  }

  function error(message) {
    return throwError({error: { message } });
  }

  function ok(body?) {
    return of (new HttpResponse({status: 200, body}));
  }

}
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
