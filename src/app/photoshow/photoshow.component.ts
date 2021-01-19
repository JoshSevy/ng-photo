import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent implements OnInit {

  constructor(private unsplashService: UnsplashService) {
      unsplashService.getPhoto().subscribe((response) => {
        console.log(response.urls.regular)
      });
   }

  ngOnInit(): void {
  }

}
