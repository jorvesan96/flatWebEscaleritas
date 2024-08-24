// src/app/pictures/pictures.component.ts
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  imageUrls: string[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    const imagePaths = [
      'images/carousel/image1.png',  // Path to image in Firebase Storage
      'images/carousel/image2.png',
      'images/carousel/image3.png'
    ];

    imagePaths.forEach(path => {
      this.storageService.getImageUrl(path).subscribe(url => {
        this.imageUrls.push(url);
      });
    });
  }
}
