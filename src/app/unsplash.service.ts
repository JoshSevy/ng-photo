import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators'

import { environment } from '../environments/environment'

interface UnsplashData {
  urls: {
    regular: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  constructor(private http: HttpClient) { }


  getPhoto() {
    return this.http.get<UnsplashData>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${environment.API}`,
      }
    }).pipe(
      pluck('urls', 'regular')
    )
  }

}
