import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  baseUrl = 'http://localhost:81/laravel/laravel-angular-services/public/api/';
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) { 
    if(localStorage.getItem('access_token') == null) {
      localStorage.setItem('access_token', 'NoToken');
    }
    
    this.headers = new Headers({
      'Content-type' : 'application/json',
      'Authorization' : 'Bearer' + ' '+ localStorage.getItem('access_token')
    })

    this.options = new RequestOptions( { headers: this.headers});
  }

  httpGet(url: any): Observable<any>{
    alert(this.baseUrl);
    return this.http.get(this.baseUrl + url, this.options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

 
}
