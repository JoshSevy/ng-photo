import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent implements OnInit {
  photoUrl: string;

  constructor(private unsplashService: UnsplashService) {
      unsplashService.getPhoto().subscribe((response) => {
        this.photoUrl = response.urls.regular;
      });
   }

  ngOnInit(): void {
  }

}
