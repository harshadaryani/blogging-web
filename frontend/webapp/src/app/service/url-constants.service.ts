import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlConstantsService {

  constructor() { }

  public readonly BACKEND_ENDPOINT = environment.REST_API_LOCATION;

  public readonly BASE_URL = '/api';

  public readonly URL_SEPARATOR = '/';

  //public readonly USERS_URL = 'users';

  public readonly POSTS_URL = 'posts';

}
