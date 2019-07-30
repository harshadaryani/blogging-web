import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

import { UrlConstantsService } from 'src/app/service/url-constants.service';
import { UserDetailDto } from 'src/app/models/user-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {
  url = "";

  constructor(private httpService: HttpService, private urlConstantsService: UrlConstantsService) {
    this.url = urlConstantsService.BACKEND_ENDPOINT + urlConstantsService.BASE_URL;
  }

  login(loginPayload): Observable<any> {
    return this.httpService.post(this.urlConstantsService.BACKEND_ENDPOINT + this.urlConstantsService.URL_SEPARATOR +
      this.urlConstantsService.LOGIN_URL, loginPayload);
  }


  get(): Observable<UserDetailDto> {
    return this.httpService.get(this.url + this.urlConstantsService.URL_SEPARATOR +
      this.urlConstantsService.POSTS_URL);
  }

  getById(id): Observable<UserDetailDto> {
    return this.httpService.get(this.url + this.urlConstantsService.URL_SEPARATOR +
      this.urlConstantsService.POSTS_URL + this.urlConstantsService.URL_SEPARATOR + id);
  }

  post(body): Observable<any> {
    return this.httpService.post(this.url + this.urlConstantsService.URL_SEPARATOR +
      this.urlConstantsService.POSTS_URL, body);
  }

  put(id, body): Observable<any> {
    return this.httpService.put(this.url + this.urlConstantsService.URL_SEPARATOR +
      this.urlConstantsService.POSTS_URL + this.urlConstantsService.URL_SEPARATOR + id, body);
  }

  delete(id): Observable<any> {
    return this.httpService.delete(this.url + this.urlConstantsService.URL_SEPARATOR +
      this.urlConstantsService.POSTS_URL + this.urlConstantsService.URL_SEPARATOR + id);
  }
}
