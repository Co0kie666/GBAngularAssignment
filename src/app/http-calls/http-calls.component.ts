import { Component } from '@angular/core';
import { CatImagesService } from '../services/cat-images.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.scss']
})
export class HttpCallsComponent {

  catImagesData: any[] = [];
  isDisabled: boolean = false;

  constructor(private catImagesService: CatImagesService) {}

  ngOnInit(): void {
    this.loadOtherImages()
  }

  loadOtherImages() {
    this.catImagesService.getImages(10).subscribe((data: any) => {
      this.catImagesData = data;
    }); 
    
    this.isDisabled = true;
    setTimeout(() => {
      this.isDisabled = false
    }, 5000); //* 5 second delay to ensure the button is not spammable
  }
}
