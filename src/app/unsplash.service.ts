import { Injectable } from '@angular/core';
import { HttpClient } from '@andular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private http: HttpClient) { }
}
