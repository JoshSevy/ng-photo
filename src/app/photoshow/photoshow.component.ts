import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent {
  photoUrl: string;

  constructor(private unsplashService: UnsplashService) {
      this.fetchPhoto();
   }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.unsplashService.getPhoto().subscribe((response) => {
        this.photoUrl = response;
      });
  }

}
