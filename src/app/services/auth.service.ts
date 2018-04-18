import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  loggedIn: boolean = false;
  
  constructor(private http : Http) {
    this.loggedIn = !!localStorage.getItem('access_token');
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('access_token');

  }

  //private outhUrl = 'http://localhost:81/laravel/laravel-angular-services/public/oauth/token';
  private outhUrl = 'http://localhost/sathiyaraj/laravel/angular-laravel-services/public/oauth/token';

  loginSubmit(email: string, password: string): Observable<any> {

    var headers = new Headers({
      "Content-type" : "application/json",
      "Accept" : "application/json"
    });

    let postData = {
      grant_type  : "password",
      client_id : 2,
      client_secret: "HqbNzgjbp2nTlGhPTCsra2VqUjCtfxfyhrPgWfU1",
      username  : email,
      password  : password,
      scope : ""
    }

    return this.http.post(this.outhUrl, JSON.stringify(postData), {
      headers : headers
    })
    .map((res: Response) => res.json())
    .do(
      res =>  {
        if(res.access_token) {          
          localStorage.setItem('access_token', res.access_token);
        }
      }
    )
    .catch(this.handleError);   
  }

  private handleError(err) {
    let errMessage: string;
 
    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
 
    return Observable.throw(errMessage);
  }

}
