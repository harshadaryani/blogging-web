import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url) : Observable < any > {
    return this.http.get(url, httpOptions);
  }

  post(url, body): Observable < any > {
    return this.http.post(url, body, httpOptions);
  }

  put(url, body): Observable < any > {
    return this.http.put(url, body, httpOptions);
  }

  delete(url) : Observable < any > {
    return this.http.delete(url);
  }
}
