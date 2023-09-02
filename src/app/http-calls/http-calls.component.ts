import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.scss']
})
export class HttpCallsComponent {

  constructor(private http: HttpClient) {}

  catImages: any[] = [];
  baseUrl: string = 'https://api.thecatapi.com/v1/images/search'

  ngOnInit() {
    this.getImages(10)
  }

  getImages(limit: number) {
    const url = this.baseUrl + '?limit=' + limit

    this.http.get(url).subscribe((data: any) => {
      this.catImages = data; 
      console.log(this.catImages)
    });
  }
}
