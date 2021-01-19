import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  constructor(private http: HttpClient) { }


  getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${environment.API}`,
      }
    })
  }

}
